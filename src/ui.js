//data is the city json
let currentMeasurement = 'F';

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
    let precipitationProb = data.currentConditions.precipprob;

    let wind = data.currentConditions.windspeed;

    //footer display
    let containerOne = document.querySelector('.forecast-1');
    let containerTwo = document.querySelector('.forecast-2');
    let containerThree = document.querySelector('.forecast-3');
    let containerFour = document.querySelector('.forecast-4');
    let containerFive = document.querySelector('.forecast-5');

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
    if(currentMeasurement === "F"){
        currentWeatherDiv.textContent = currentWeather + "F";
    } else {
        currentWeatherDiv.textContent = currentWeatherC + "C"
    };
    weatherContainer.appendChild(currentWeatherDiv);

    //Dynamic emoji
    let weatherEmoji = document.createElement('div');
    weatherEmoji.classList.add('weather-emoji');
    if(data.currentConditions.conditions.includes('cloudy')){
        weatherEmoji.textContent = "☁️"
    } else if (data.currentConditions.conditions.includes('Rain')){
        weatherEmoji.textContent = "🌧️"
    } else if (data.currentConditions.conditions.includes('Snow')){
        weatherEmoji.textContent = "❄️"
    } else{
        weatherEmoji.textContent = "☀️"
    }
    weatherContainer.appendChild(weatherEmoji);

    //weatherDescription
    let weatherDescriptionDiv = document.createElement('div');
    weatherDescriptionDiv.classList.add('weather-desc-div');
    weatherDescriptionDiv.textContent = weatherDescription;
    weatherContainer.appendChild(weatherDescriptionDiv);

    //precipitation and precipitation probability
    let precipDiv = document.createElement('div');
    precipDiv.classList.add('precip-div');
    precipDiv.textContent = `Current precipitaion: `+ precipitation;

    let precipProbDiv =document.createElement('div');
    precipProbDiv.textContent = `Precipitation probability: ` + precipitationProb;

    precipContainer.appendChild(precipDiv);
    precipContainer.appendChild(precipProbDiv);

    //wind
    let windDiv = document.createElement('div');
    windDiv.classList.add('wind-div');
    windDiv.textContent =  wind + ' mph';
    windContainer.appendChild(windDiv);

    //display for the 5 day forecast footer
    //container 1
    let forecastOneDateDiv = document.createElement('div');
    forecastOneDateDiv.classList.add('forecast-date-div');
    forecastOneDateDiv.textContent = data.days[1].datetime;

    let forecastOneEmoji = document.createElement('div');
    forecastOneEmoji.classList.add('forecast-one-emoji');
    if(data.days[1].conditions.includes('cloudy')){
        forecastOneEmoji.textContent = "☁️"
    } else if (data.days[1].conditions.includes('Rain')){
        forecastOneEmoji.textContent = "🌧️"
    } else if (data.days[1].conditions.includes('Snow')){
        forecastOneEmoji.textContent = "❄️"
    } else{
        forecastOneEmoji.textContent = "☀️"
    };
 
    let forecastOneWeather = document.createElement('div');
    forecastOneWeather.classList.add('forecast-one-weather');
    if(currentMeasurement === "F"){
        forecastOneWeather.textContent = data.days[1].temp + "F";
    } else {
        forecastOneWeather.textContent = ((data.days[1].temp - 32) * (5/9)).toFixed(2) + "C"
    };


    containerOne.appendChild(forecastOneDateDiv);
    containerOne.appendChild(forecastOneEmoji);
    containerOne.appendChild(forecastOneWeather);

    // container 2
    let forecastTwoDateDiv = document.createElement('div');
    forecastTwoDateDiv.classList.add('forecast-date-div');
    forecastTwoDateDiv.textContent = data.days[2].datetime;

    let forecastTwoEmoji = document.createElement('div');
    forecastTwoEmoji.classList.add('forecast-two-emoji');
    if (data.days[2].conditions.includes('cloudy')) {
        forecastTwoEmoji.textContent = "☁️";
    } else if (data.days[2].conditions.includes('Rain')) {
        forecastTwoEmoji.textContent = "🌧️";
    } else if (data.days[2].conditions.includes('Snow')) {
        forecastTwoEmoji.textContent = "❄️";
    } else {
        forecastTwoEmoji.textContent = "☀️";
    }

    let forecastTwoWeather = document.createElement('div');
    forecastTwoWeather.classList.add('forecast-two-weather');
    if (currentMeasurement === "F") {
        forecastTwoWeather.textContent = data.days[2].temp + "F";
    } else {
        forecastTwoWeather.textContent = ((data.days[2].temp - 32) * (5 / 9)).toFixed(2) + "C";
    }

    // Append elements to containerTwo
    containerTwo.appendChild(forecastTwoDateDiv);
    containerTwo.appendChild(forecastTwoEmoji);
    containerTwo.appendChild(forecastTwoWeather);

    // container 3
    let forecastThreeDateDiv = document.createElement('div');
    forecastThreeDateDiv.classList.add('forecast-date-div');
    forecastThreeDateDiv.textContent = data.days[3].datetime;

    let forecastThreeEmoji = document.createElement('div');
    forecastThreeEmoji.classList.add('forecast-three-emoji');
    if (data.days[3].conditions.includes('cloudy')) {
        forecastThreeEmoji.textContent = "☁️";
    } else if (data.days[3].conditions.includes('Rain')) {
        forecastThreeEmoji.textContent = "🌧️";
    } else if (data.days[3].conditions.includes('Snow')) {
        forecastThreeEmoji.textContent = "❄️";
    } else {
        forecastThreeEmoji.textContent = "☀️";
    }

    let forecastThreeWeather = document.createElement('div');
    forecastThreeWeather.classList.add('forecast-three-weather');
    if (currentMeasurement === "F") {
        forecastThreeWeather.textContent = data.days[3].temp + "F";
    } else {
        forecastThreeWeather.textContent = ((data.days[3].temp - 32) * (5 / 9)).toFixed(2) + "C";
    }

    // Append elements to containerThree
    containerThree.appendChild(forecastThreeDateDiv);
    containerThree.appendChild(forecastThreeEmoji);
    containerThree.appendChild(forecastThreeWeather);

    // container 4
    let forecastFourDateDiv = document.createElement('div');
    forecastFourDateDiv.classList.add('forecast-date-div');
    forecastFourDateDiv.textContent = data.days[4].datetime;

    let forecastFourEmoji = document.createElement('div');
    forecastFourEmoji.classList.add('forecast-four-emoji');
    if (data.days[4].conditions.includes('cloudy')) {
        forecastFourEmoji.textContent = "☁️";
    } else if (data.days[4].conditions.includes('Rain')) {
        forecastFourEmoji.textContent = "🌧️";
    } else if (data.days[4].conditions.includes('Snow')) {
        forecastFourEmoji.textContent = "❄️";
    } else {
        forecastFourEmoji.textContent = "☀️";
    }

    let forecastFourWeather = document.createElement('div');
    forecastFourWeather.classList.add('forecast-four-weather');
    if (currentMeasurement === "F") {
        forecastFourWeather.textContent = data.days[4].temp + "F";
    } else {
        forecastFourWeather.textContent = ((data.days[4].temp - 32) * (5 / 9)).toFixed(2) + "C";
    }

    // Append elements to containerFour
    containerFour.appendChild(forecastFourDateDiv);
    containerFour.appendChild(forecastFourEmoji);
    containerFour.appendChild(forecastFourWeather);

    // container 5
    let forecastFiveDateDiv = document.createElement('div');
    forecastFiveDateDiv.classList.add('forecast-date-div');
    forecastFiveDateDiv.textContent = data.days[5].datetime;

    let forecastFiveEmoji = document.createElement('div');
    forecastFiveEmoji.classList.add('forecast-five-emoji');
    if (data.days[5].conditions.includes('cloudy')) {
        forecastFiveEmoji.textContent = "☁️";
    } else if (data.days[5].conditions.includes('Rain')) {
        forecastFiveEmoji.textContent = "🌧️";
    } else if (data.days[5].conditions.includes('Snow')) {
        forecastFiveEmoji.textContent = "❄️";
    } else {
        forecastFiveEmoji.textContent = "☀️";
    }

    let forecastFiveWeather = document.createElement('div');
    forecastFiveWeather.classList.add('forecast-five-weather');
    if (currentMeasurement === "F") {
        forecastFiveWeather.textContent = data.days[5].temp + "F";
    } else {
        forecastFiveWeather.textContent = ((data.days[5].temp - 32) * (5 / 9)).toFixed(2) + "C";
    }

    // Append elements to containerFive
    containerFive.appendChild(forecastFiveDateDiv);
    containerFive.appendChild(forecastFiveEmoji);
    containerFive.appendChild(forecastFiveWeather);

}