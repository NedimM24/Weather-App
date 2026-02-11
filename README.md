# API Practice: Weather App

<img width="2558" height="1314" alt="image" src="https://github.com/user-attachments/assets/3a2db6e3-acef-48dc-bcb1-b9de5672d8ca" />

# 🌦️ Weather App – API Practice Project

A simple weather application built with JavaScript, Webpack, and the Visual Crossing Weather API.
This project was created to practice working with REST APIs, handling asynchronous JavaScript, and dynamically updating the DOM with real-time weather data.

# 🚀 Live Overview

## This app allows users to:

 - 🔍 Search for any city

 - 🌡️ Toggle between Fahrenheit and Celsius

 - 🌤️ View current weather conditions

 - 🌧️ See precipitation and wind data

 - 📅 View a 5-day forecast

The application fetches real-time weather data from an external API and renders it dynamically on the page.

# 🌍 Main Focus: Working with APIs
## 🔗 What API Is Used?

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
<img width="2559" height="1308" alt="image" src="https://github.com/user-attachments/assets/4c00dc15-1a77-4505-ba86-f549d47b02eb" />
<img width="2558" height="1304" alt="image" src="https://github.com/user-attachments/assets/4fd7f3c0-4487-4767-82f7-12917f06deb0" />
<img width="2555" height="1308" alt="image" src="https://github.com/user-attachments/assets/db03e03c-781d-411f-b6f5-9d4cdb287203" />
<img width="2556" height="1308" alt="image" src="https://github.com/user-attachments/assets/084e04c9-7289-44c1-80e4-c285e27471ce" />
<img width="2553" height="1308" alt="image" src="https://github.com/user-attachments/assets/d70853df-7980-4487-a5fe-b2e22da8d77c" />


