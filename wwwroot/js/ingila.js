{
    $(document).ready(function () {
        //hide failed alert on doc load
        var failedalert = document.getElementById("alertfailed");
        failedalert.hidden = true;
        var successalert = document.getElementById("alertsuccess");
        successalert.hidden = true;
		//alert("ready!");

        function handleSubmit(event) {
            event.preventDefault();

            const data = new FormData(event.target);

            const value = Object.fromEntries(data.entries());
            logincall(value);

        }

        const form = document.querySelector('form');

        if (form != null) {
            form.addEventListener('submit', handleSubmit);

        }


        //call to login

        //postvalues function
        function logincall(value) {
            event.preventDefault();
            const values = value;
            console.log("signing in ...");
            
            $.ajax({
                type: 'POST',
                url: 'http://localhost:46568/api/Auth/Login',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: values,
                success: function (result) {
                    successalert.hidden = false;
                    console.log('http://localhost:5216/Home/Index');
                    window.location.href = "http://localhost:5216/Home/Index";

                },
                error: function () {
                    failedalert.hidden = false;
                   
                }
            })

        }
	});
}