//data is the city json

export function displayWeatherData(city, data){
    let cityName = city;
    let currentWeather = data.currentConditions.temp;
    let precipitation = data.currentConditions.precip;
    let wind = data.currentConditions.windspeed;

    console.log(wind);
    
}