# API Practice: Weather App

<img width="2559" height="1381" alt="image" src="https://github.com/user-attachments/assets/9a3b5b56-189e-40c0-b08e-894064bb3773" />


# 🌦️ Weather App – API Practice Project

A simple weather application built with JavaScript, Webpack, and the Visual Crossing Weather API.
This project was created to practice working with REST APIs, handling asynchronous JavaScript, and dynamically updating the DOM with real-time weather data.

#  Live Overview

## This app allows users to:

 -  Search for any city

 -  Toggle between Fahrenheit and Celsius

 -  View current weather conditions

 -  See precipitation and wind data

 -  View a 5-day forecast

 - Weather emojis dynamically chnage based on current weather conditions

The application fetches real-time weather data from an external API and renders it dynamically on the page.



# API Key Note

The API key is currently hardcoded for development purposes.

 In a production application:

 - API keys should be stored securely

 - Environment variables should be used

 - Sensitive data should never be exposed in frontend code

# 🌍 Main Focus: Working with APIs
##  What API Is Used?

This project uses the:

Visual Crossing Weather API
https://www.visualcrossing.com/weather-api

It provides:

 - Current weather conditions

 - Hourly and daily forecasts

 - Temperature

 - Wind speed

 - Precipitation

 - Weather descriptions.

---

# 🛠️ Technologies Used

 - JavaScript (ES Modules)

 - Webpack 5

 - Webpack Dev Server

 - CSS

 - Visual Crossing Weather API

 - ESLint

 - Prettier


# 📡 How the API Request Works

The app fetches weather data using the fetch() API:
---
export async function fetchCityWeather(city) {
  try {
    let userCity = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=YOUR_API_KEY`
    );

    if (!userCity.ok) {
      throw new Error(`Failed to fetch ${city}'s data`);
    }

    let cityJson = await userCity.json();
    return cityJson;

  } catch (error) {
    console.log(error);
    return null;
  }
}

---
🔎 What’s Happening Here?

1. A dynamic URL is created using the user’s city input.

2. The app sends a GET request to the API.

3. If the response fails → an error is thrown.

4. The JSON data is parsed.

5. The processed data is returned to the app.

This demonstrates:

 - Asynchronous JavaScript (async/await)

 -  Error handling with try/catch

 -  Handling failed HTTP responses

 -  Parsing JSON responses

 -  Dynamic API endpoints


# 🔎 Search Function

## The search feature allows users to enter a city and fetch its weather data from the API.
---
searchBtn.addEventListener("click", () => {
  currentCity = userCity.value;
  clearContainers();
  getWeather(currentCity);
});
---
How It Works

 - The user types a city name.

 - When the search button is clicked, the app:

   - Updates the currentCity

   - Clears the old weather data

   - Sends a new API request using getWeather()

 - The new data is then displayed on the page.

This connects user input → API request → updated UI, making the app dynamic and interactive.
<img width="2557" height="1382" alt="image" src="https://github.com/user-attachments/assets/219af3f0-d16d-468d-bb19-59beeea70f13" />
<img width="2559" height="1383" alt="image" src="https://github.com/user-attachments/assets/c4218868-0fbd-46f7-ae6a-c34ff7c81e52" />




