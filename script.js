const apikey = "e8819e8ae04515f524475bb5d5d9f6b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city+ `&appid=${apikey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +'°C'
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"


}
searchbtn.addEventListener("click", ()=>{
    
    if(searchBox.value===""){
        alert("plz enter city name ☺☺")

    }else{
        checkWeather(searchBox.value);
    }
})
