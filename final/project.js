//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
//https://api.weatherapi.com/v1/current.json?key=c00096360e1446daa48173912212909&q=London&aqi=no
//api.openweathermap.org/data/2.5/weather?q={city Name},{state code}&appid={API key}
const weatherapi= {
    key: "f7d34f0537c50c01c35ed4518b07f56c",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
const searchinputbox = document.getElementById('input-box');
//event listner function
searchinputbox.addEventListener('keypress',(event) => {
     
    if(event.keyCode == 13){
    console.log(searchinputbox.value);
        getweatherreport(searchinputbox.value);
}
});


//get weather reprt
function getweatherreport(city){
    fetch(`${weatherapi.baseUrl}?q=${city}&appid=${weatherapi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showweatherreport);
}
//show weather reprt

function showweatherreport(weather){
    console.log(weather);

    let city= document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    let temperature =document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minmaxtemp = document.getElementById('min-max');
    minmaxtemp.innerHTML= `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weathertype = document.getElementById('weather');
    weathertype.innerText=`${weather.weather[0].main}`;

}

//date manage

let date = document.getElementById('date');
let todaydate = new Date();
date.innerText = dateManage(todaydate);


if(weathertype.textcontent == 'Rain')
{
    document.body.style.background = url('imageclear.jpg');
}

else if(weathertype.textContent == 'Haze')
{
    document.body.style.background = url('rain.jpg');
}

function dateManage(datearg)
{
    let days = ['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday'];
    let months=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    
    let year = datearg.getFullYear();
    let month = months[datearg.getMonth()];
    let date = datearg.getDate();
    let day= days[datearg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

}















