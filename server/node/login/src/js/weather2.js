function evonGeoSuccess(position){
  // const disc = {'cloud':'흐림',}

  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  // console.log(url)
  // console.log('11')
  // let url =`https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid={8b2edef7ea3ca882a95d2761906d0a33}`
  fetch(url)
      .then(response => response.json())
      .then((data)=>{
          let evweather = document.querySelector("#evweather span:first-child");
          let evcity = document.querySelector("#evweather span:last-child");
          console.log(evweather, evcity)
          // city.innerText=data.name;
          evweather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`
      })
}
navigator.geolocation.getCurrentPosition(evonGeoSuccess,()=>{console.log('fail')});