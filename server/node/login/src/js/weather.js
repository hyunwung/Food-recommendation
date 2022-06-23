let API_KEY = '8b2edef7ea3ca882a95d2761906d0a33'

function onGeoSuccess(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data)=>{
            let weather = document.querySelector("#weather span:first-child");
            let city = document.querySelector("#weather span:last-child");
            console.log(weather, city)
            weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`
        })
}
navigator.geolocation.getCurrentPosition(onGeoSuccess,()=>{console.log('fail')});




