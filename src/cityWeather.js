import { fetchCityWeather } from "./fetch.js";

export async function getWeather(city) {
    try {
        const data = await fetchCityWeather(city)
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}