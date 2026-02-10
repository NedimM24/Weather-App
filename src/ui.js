//data is the city json
let currentMeaseurement = 'F';

export function displayWeatherData(city, data){
    //Variable for temp measurement. Default will be f
    
    //display for header
    let weatherContainer = document.querySelector('.b-top');
    let precipContainer = document.querySelector('.b-left');
    let windContainer = document.querySelector('.b-right');

    let cityName = city;
    let weatherDescription = data.description;
    let date = data.days[0].datetime; //[0] index is todays date
    let currentWeather = data.currentConditions.temp;
    let currentWeatherC = ((currentWeather - 32) * (5/9)).toFixed(2);

    let precipitation = data.currentConditions.precip;
    let wind = data.currentConditions.windspeed;
    
    //date
    let dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div');
    dateDiv.textContent = date;
    weatherContainer.appendChild(dateDiv);

    //city name
    let cityNameDiv = document.createElement('div');
    cityNameDiv.classList.add('city-name-div');
    cityNameDiv.textContent = cityName;
    weatherContainer.appendChild(cityNameDiv);

    //Current weather
    let currentWeatherDiv = document.createElement('div');
    currentWeatherDiv.classList.add('current-weather-div');
    if(currentMeaseurement === "F"){
        currentWeatherDiv.textContent = currentWeather + "F";
    } else {
        currentWeatherDiv.textContent = currentWeatherC + "C"
    };
    weatherContainer.appendChild(currentWeatherDiv);

    //Dynamic emoji
    let weatherEmoji = document.createElement('div');
    weatherEmoji.classList.add('weather-emoji');
    if(data.currentConditions.conditions.includes('cloudy')){
        weatherEmoji.textContent = "";
        weatherEmoji.textContent = "☁️"
    } else if (data.currentConditions.conditions.includes('Rain')){
        weatherEmoji.textContent = "";
        weatherEmoji.textContent = "🌧️"
    } else if (data.currentConditions.conditions.includes('Snow')){
        weatherEmoji.textContent = "";
        weatherEmoji.textContent = "❄️"
    } else{
        weatherEmoji.textContent = "";
        weatherEmoji.textContent = "☀️"
    }
    weatherContainer.appendChild(weatherEmoji);

    

    //weatherDescription
    let weatherDescriptionDiv = document.createElement('div');
    weatherDescriptionDiv.classList.add('weather-desc-div');
    weatherDescriptionDiv.textContent = weatherDescription;
    weatherContainer.appendChild(weatherDescriptionDiv);









    //display for the 5 day forecast footer

    
}