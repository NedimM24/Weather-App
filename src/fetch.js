export async function fetchCityWeather(city) {
    try {
        let userCity = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=7KW4HJV8W8UNBS4Z4GHDG9B7W`)
        if(!userCity.ok){
            throw new Error(`Failed to fetch ${city}'s data`)
        }
        let cityJson = await userCity.json();
        return cityJson;        
    } catch (error) {
        console.log(error);
        return null;
    }
}
