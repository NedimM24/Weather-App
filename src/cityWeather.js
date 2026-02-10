import { fetchCityWeather } from "./fetch.js";
import { displayWeatherData } from "./ui.js";

export async function getWeather(city) {
    try {
        const data = await fetchCityWeather(city)
        if(!data){
            console.log('No data found');
            return;
        }

        displayWeatherData(city, data);
        
    } catch (error) {
        console.log(error);
    }
}