{
    $(document).ready(function () {
        //alert("ready!");

        function handleSubmit(event) {
            event.preventDefault();

            const data = new FormData(event.target);

            const value = Object.fromEntries(data.entries());
            iwandihisacall(value);

        }

        const form = document.querySelector('form');

        if (form != null) {
            form.addEventListener('submit', handleSubmit);

        }


        //call to login

        //postvalues function
        function iwandihisacall(value) {
            event.preventDefault();
            const values = value;
            console.table(values);
            console.log("Registering user ...");

            $.ajax({
                type: 'POST',
                url: '/Auth/Register',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: values,
                success: function (result) {
                    alert('Successfully Posted Data ');
                    window.location.href = "Auth/SignIn";

                },
                error: function () {
                    console.log('Failed to receive the Data');
                }
            })

        }
    });
}