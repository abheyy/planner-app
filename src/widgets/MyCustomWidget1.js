import React, { useEffect, useState } from 'react';

const MyCustomWidget1 = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '7c50d6127c6ecbee83c5a0a0ef1be3c2'; // Replace with your actual API key
  const location = 'Mumbai'; // Replace with the desired location

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  return (
    <div style={{ minWidth: 300 }}>
      <p>Weather</p>
      {weatherData ? (
        <div>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyCustomWidget1;
