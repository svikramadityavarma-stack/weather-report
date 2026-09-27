const apikey="511c10083ed7e3637d0ad89026a138fe";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

const city= document.querySelector(".city")
const temp= document.querySelector(".temp")
const humidity= document.querySelector(".humidity")
const wind= document.querySelector(".wind")
const weatherIcon=document.querySelector(".weather-icon")
const displaya=document.querySelector(".weather")

async function weatherdetails(cityname){
     const response= await fetch(apiurl + cityname + `&appid=${apikey}`)
     var data= await response.json()
      if(response.status==404){
        alert("Enter a valid city name")
        displaya.style.display="none"
      }
     city.innerHTML= data.name
     temp.innerHTML= data.main.temp+"°C"
     humidity.innerHTML=data.main.humidity+"%"
     wind.innerHTML=data.wind.speed+"km/h" 
     
     if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png"
    }
    displaya.style.display="block"
  
}

searchBtn.addEventListener("click",()=>{
    weatherdetails(searchBox.value)
})

