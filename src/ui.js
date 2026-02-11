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
    } 
})

farenheit.addEventListener('click', () => {
    if(!isFClicked){        
        farenheit.style.backgroundColor = 'blue';
        celcius.style.backgroundColor = 'white';
        isFClicked = true;
        currentMeasurement = 'F';
    }
})

function convertTemperature(temp) {
    if (currentMeasurement === 'F') {
        return temp + "F";
    } else {
        return ((temp - 32) * (5 / 9)).toFixed(2) + "C";
    }
}

function getWeatherEmoji(conditions) {
    if (conditions.includes('cloudy')) {
        return "☁️";
    } else if (conditions.includes('Rain')) {
        return "🌧️";
    } else if (conditions.includes('Snow')) {
        return "❄️";
    } else {
        return "☀️";
    }
}

function createForecastContainer(forecastData) {
    let forecastContainer = document.createElement('div');
    
    let forecastDateDiv = document.createElement('div');
    forecastDateDiv.classList.add('forecast-date-div');
    forecastDateDiv.textContent = forecastData.datetime;
    
    let forecastEmoji = document.createElement('div');
    forecastEmoji.classList.add('forecast-emoji');
    forecastEmoji.textContent = getWeatherEmoji(forecastData.conditions);
    
    let forecastWeather = document.createElement('div');
    forecastWeather.classList.add('forecast-weather');
    forecastWeather.textContent = convertTemperature(forecastData.temp);
    
    forecastContainer.appendChild(forecastDateDiv);
    forecastContainer.appendChild(forecastEmoji);
    forecastContainer.appendChild(forecastWeather);

    return forecastContainer;
}

export function displayWeatherData(city, data) {
    // Display for header
    let weatherContainer = document.querySelector('.b-top');
    let precipContainer = document.querySelector('.b-left');
    let windContainer = document.querySelector('.b-right');

    // Extracting variables
    let cityName = city;
    let weatherDescription = data.description;
    let date = data.days[0].datetime;
    let currentWeather = data.currentConditions.temp;
    let currentWeatherC = ((currentWeather - 32) * (5 / 9)).toFixed(2);

    let precipitation = data.currentConditions.precip;
    let precipitationProb = data.currentConditions.precipprob;

    let wind = data.currentConditions.windspeed;

    // Date and City
    let dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div');
    dateDiv.textContent = date;
    weatherContainer.appendChild(dateDiv);

    let cityNameDiv = document.createElement('div');
    cityNameDiv.classList.add('city-name-div');
    cityNameDiv.textContent = cityName;
    weatherContainer.appendChild(cityNameDiv);

    // Current Weather
    let currentWeatherDiv = document.createElement('div');
    currentWeatherDiv.classList.add('current-weather-div');
    currentWeatherDiv.textContent = convertTemperature(currentWeather);
    weatherContainer.appendChild(currentWeatherDiv);

    // Dynamic emoji
    let weatherEmoji = document.createElement('div');
    weatherEmoji.classList.add('weather-emoji');
    weatherEmoji.textContent = getWeatherEmoji(data.currentConditions.conditions);
    weatherContainer.appendChild(weatherEmoji);

    // Weather description
    let weatherDescriptionDiv = document.createElement('div');
    weatherDescriptionDiv.classList.add('weather-desc-div');
    weatherDescriptionDiv.textContent = weatherDescription;
    weatherContainer.appendChild(weatherDescriptionDiv);

    // Precipitation
    let precipDiv = document.createElement('div');
    precipDiv.classList.add('precip-div');
    precipDiv.textContent = `Current precipitation: ` + precipitation;

    let precipProbDiv = document.createElement('div');
    precipProbDiv.textContent = `Precipitation probability: ` + precipitationProb;

    precipContainer.appendChild(precipDiv);
    precipContainer.appendChild(precipProbDiv);

    // Wind
    let windDiv = document.createElement('div');
    windDiv.classList.add('wind-div');
    windDiv.textContent = wind + ' mph';
    windContainer.appendChild(windDiv);

    // Display for the 5-day forecast
    let forecastContainers = [document.querySelector('.forecast-1'), document.querySelector('.forecast-2'), document.querySelector('.forecast-3'), document.querySelector('.forecast-4'), document.querySelector('.forecast-5')];
    
    // Loop through forecast days and add containers dynamically
    data.days.slice(1, 6).forEach((forecastData, index) => {
        let forecastContainer = createForecastContainer(forecastData);
        forecastContainers[index].appendChild(forecastContainer);
    });
}