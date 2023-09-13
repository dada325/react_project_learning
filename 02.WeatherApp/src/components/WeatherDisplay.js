import React from 'react';

function WeatherDisplay({ weather }) {
  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{weather.name}</h1>
      <p>Temperature: {weather.temp}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Conditions: {weather.description}</p>
    </div>
  );
}

export default WeatherDisplay;
