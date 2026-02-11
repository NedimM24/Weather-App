import "./style.css";

import { getWeather } from "./cityWeather.js";


getWeather('Sarajevo'); //Placeholder until user searches for new city

let searchBtn = document.querySelector('.search-btn');
let userCity = document.getElementById('search');
searchBtn.addEventListener('click', () => {
    clearContainers();
    getWeather(userCity.value);
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