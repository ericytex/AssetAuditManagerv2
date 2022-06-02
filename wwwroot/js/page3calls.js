{
    //call financemgnt page
    $(document).ready(function () {

        //fetch2
        fetch('http://localhost:5130/WeatherForecast').then(res => res.json()).then(e => console.log(e))
    })
    //fetch inventories list
}