{
    //call financemgnt page
    $(document).ready(function () {
        const element = document.getElementById("FinanceMngtBtn");
        if (!element) {
            element.addEventListener("click", function () {
                console.log("Hello World");
            })
        }
        // Creating the XMLHttpRequest object
        var request = new XMLHttpRequest();
        // Instantiating the request object
        request.open("POST", "Home/FiananceMngt");
        // Defining event listener for readystatechange event
        request.onreadystatechange = function () {
            // Check if the request is compete and was successful
            if (this.readyState === 4 && this.status === 200) {
                // Inserting the response from server into an HTML element
                document.getElementById("page-body1").innerHTML = this.responseText;
            }
        };

    });

    function upgrade() {
        const element = document.getElementById("upgrade");
        const pagewrapper = document.getElementById("page-body1");
        if (element) {
            element.addEventListener("click", function () {
                console.log("hi");
                if (pagewrapper) {
                    $("#page-body1").empty();
                    document.getElementById("page-body1").innerHTML = '<div class="row text-center"><div class="col-xl-6 col-md-12"><div class="card social-card bg-simple-c-green"><div class="card-block"><div class="row align-items-center"><div class="col-auto"><i class="feather icon-statistics f-34 text-c-green social-icon"></i> </div> <div class="col"> <h6 class="m-b-0">Business Analytics</h6> <p>231.. subscriptions</p> <p class="m-b-0">This Feature is available in only the Pro Version. Consider upgrading to Access!</p>'
                    '</div>'
                    '</div>'
                    '</div>'
                    ' <a href="#!" class="download-icon"><i class="feather icon-arrow-down"></i></a> </div></div></div>'
                }
            })
        }
    }
    //fetch2
    fetch('http://localhost:56587/api/Inventories').then(res => res.json()).then(e => console.log(e))

    //fetch inventories list
}