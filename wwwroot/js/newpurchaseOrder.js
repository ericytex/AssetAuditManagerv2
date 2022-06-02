{
    $(document).ready(function () {
        //start

        var AllCompanies = "";
        var AllVendors = "";

        //fetching Company details

        $.get('http://localhost:46568/api/Companies').done(function (companies) {
            AllCompanies = companies;
            var ownCategoryvals = "";
            for (var prop in companies) {
                console.log(companies);
                ownCategoryvals = companies[prop].companyName;
                $('#CompanyName').append("<option value = " + companies[prop].companyId+">" + companies[prop].companyName + "</option>");
                
                // Search the select box
                const mySelectBoxval = document.querySelector('#CompanyName');
                // Set the value to 3 or Strawberry
                mySelectBoxval.value = ownCategoryvals;

            }

        });
        //fetching vendor details

        $.get('http://localhost:46568/api/Vendors').done(function (vendors) {
            console.log("fetching vendors..");
            for (var prop in vendors) {
                ownCategoryvals = vendors[prop].vendorName;
                $('#VendorId').append("<option value = " + vendors[prop].vendor_Id+" >" + vendors[prop].vendorName + "</option>");

                // Search the select box
                const mySelectBoxval = document.querySelector('#VendorId');
                // Set the value to 3 or Strawberry
                mySelectBoxval.value = ownCategoryvals;

            }
        });


        var NewPOid = "";
        var AllCompanies = "";
        var AllVendors = "";
        function randomCategoryGUID() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
        NewPOid = randomCategoryGUID();

        function handleSubmit(event) {
            event.preventDefault();

            const data = new FormData(event.target);

            const value = Object.fromEntries(data.entries());
            PostToNewPO(value);

        }

        const form = document.querySelector('form');

        if (form != null) {
            form.addEventListener('submit', handleSubmit);

        }


        //postvalues function
        function PostToNewPO(value) {
            event.preventDefault();
            const values = value;
            console.log("logging all Purchase Order values ...");
            var cval = value.CompanyName
            values.poId = NewPOid;
            getcompanyetails(cval);
            console.log(values);
            $.ajax({
                type: 'POST',
                url: 'http://localhost:46568/api/PurchaseOrders',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: values,
                success: function (result) {
                    alert('Successfully Posted Data ');
                    window.location.href = "http://localhost:5216/PurchaseOrder/PurchaseOrders";

                },
                error: function () {
                    console.log('Failed to receive the Data');
                }
            })

        }

        //get values function
        function getcompanyetails(cval) {
            console.log(cval);
            $.get('http://localhost:46568/api/Companies').done(function (companies) {
                AllCompanies = companies;
                var ownCategoryvals = "";
                for (var prop in companies) {
                    console.log(companies);
                    ownCategoryvals = companies[prop].companyName;
                    $('#CompanyName').append("<option >" + companies[prop].companyName + "</option>");

                    // Search the select box
                    const mySelectBoxval = document.querySelector('#CompanyName');
                    // Set the value to 3 or Strawberry
                    mySelectBoxval.value = ownCategoryvals;

                }

            });

        }
        




        //end
    })

}
