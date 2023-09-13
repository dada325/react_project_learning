import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = (city) => {
    const apiKey = 'API-KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather({
            name: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
          });
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        alert('Error fetching weather data. Try again.');
      });
  };
  
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
