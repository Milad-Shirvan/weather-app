const apikey="71ccf24da1f5f039157e2dbf7aca7a1e";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkweather(city){
    const response =await fetch(apiurl +city+`&appid=${apikey}`);
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();
    
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed +" Km/h";
    
    const weatherIcons = {
        "Clouds": "images/clouds.png",
        "Clear": "images/clear.png",
        "Rain": "images/rain.png",
        "Drizzle": "images/drizzle.png",
        "Mist": "images/mist.png",
        "Snow": "images/snow.png"
    };
    
    weatherIcon.src = weatherIcons[data.weather[0].main];

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
        
    }
}
searchbtn.addEventListener("click",()=>{
checkweather(searchbox.value);
})