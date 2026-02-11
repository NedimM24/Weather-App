import "./style.css";

import { getWeather } from "./cityWeather.js";

let currentCity = 'Sarajevo'


getWeather(currentCity); //Placeholder until user searches for new city

let searchBtn = document.querySelector('.search-btn');
let userCity = document.getElementById('search');

searchBtn.addEventListener('click', () => {
    currentCity = userCity.value;
    clearContainers();
    getWeather(currentCity);
}) 


//Temp hadler
let farenheit = document.querySelector('.f-btn');
let celcius = document.querySelector('.c-btn');

let isFClicked = true;
let currentMeasurement = 'F';



farenheit.style.backgroundColor = 'blue';
celcius.style.backgroundColor = 'white';

celcius.addEventListener('click', () => {
    if(isFClicked){
        celcius.style.backgroundColor = "blue";
        farenheit.style.backgroundColor = 'white';
        isFClicked = false;
        currentMeasurement = 'C';
        clearContainers();
        getWeather(currentCity);
        
    } 
})

farenheit.addEventListener('click', () => {
    if(!isFClicked){        
        farenheit.style.backgroundColor = 'blue';
        celcius.style.backgroundColor = 'white';
        isFClicked = true;
        currentMeasurement = 'F';
        clearContainers();
        getWeather(currentCity);
    }
})




function clearContainers() {
    // Clear the main weather container
    const weatherContainer = document.querySelector('.b-top');
    weatherContainer.innerHTML = ''; // This removes all child elements

    // Clear the precipitation container
    const precipContainer = document.querySelector('.b-left');
    precipContainer.innerHTML = ''; // This removes all child elements

    // Clear the wind container
    const windContainer = document.querySelector('.b-right');
    windContainer.innerHTML = ''; // This removes all child elements

    // Clear the forecast containers
    const forecastContainers = [
        document.querySelector('.forecast-1'), 
        document.querySelector('.forecast-2'), 
        document.querySelector('.forecast-3'), 
        document.querySelector('.forecast-4'), 
        document.querySelector('.forecast-5')
    ];

    // Clear all forecast containers
    forecastContainers.forEach(container => {
        container.innerHTML = ''; // This removes all child elements inside each forecast container
    });
}