import React, { useEffect, useState } from 'react';
import '../styles/components/_weather-widget.scss';

interface WeatherData {
  temperature: number;
  windSpeed: number;
  windDirection: number;
  precipitation: number;
  weatherCode: number;
}

interface City {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}

const cities: City[] = [
  { name: 'Portland', latitude: 45.5155, longitude: -122.6789, country: 'USA' },
  { name: 'Paris', latitude: 48.8566, longitude: 2.3522, country: 'France' },
  { name: 'London', latitude: 51.5074, longitude: -0.1278, country: 'UK' },
  { name: 'Berlin', latitude: 52.5200, longitude: 13.4050, country: 'Germany' },
  { name: 'Tokyo', latitude: 35.6762, longitude: 139.6503, country: 'Japan' },
  { name: 'Sydney', latitude: -33.8688, longitude: 151.2093, country: 'Australia' },
  { name: 'New York', latitude: 40.7128, longitude: -74.0060, country: 'USA' },
  { name: 'Dubai', latitude: 25.2048, longitude: 55.2708, country: 'UAE' }
];

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,precipitation,weather_code&timezone=auto`
        );
        const data = await response.json();

        setWeather({
          temperature: data.current.temperature_2m,
          windSpeed: data.current.wind_speed_10m,
          windDirection: data.current.wind_direction_10m,
          precipitation: data.current.precipitation,
          weatherCode: data.current.weather_code,
        });
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    // Update every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  const getWeatherIcon = (code: number) => {
    // Weather code mapping based on WMO Weather interpretation codes
    const icons: { [key: number]: string } = {
      0: '☀️', // Clear sky
      1: '🌤️', // Mainly clear
      2: '⛅', // Partly cloudy
      3: '☁️', // Overcast
      45: '🌫️', // Foggy
      48: '🌫️', // Depositing rime fog
      51: '🌧️', // Light drizzle
      53: '🌧️', // Moderate drizzle
      55: '🌧️', // Dense drizzle
      61: '🌧️', // Slight rain
      63: '🌧️', // Moderate rain
      65: '🌧️', // Heavy rain
      71: '🌨️', // Slight snow
      73: '🌨️', // Moderate snow
      75: '🌨️', // Heavy snow
      77: '🌨️', // Snow grains
      80: '🌧️', // Slight rain showers
      81: '🌧️', // Moderate rain showers
      82: '🌧️', // Violent rain showers
      85: '🌨️', // Slight snow showers
      86: '🌨️', // Heavy snow showers
      95: '⛈️', // Thunderstorm
      96: '⛈️', // Thunderstorm with slight hail
      99: '⛈️', // Thunderstorm with heavy hail
    };
    return icons[code] || '❓';
  };

  const getWindDirection = (degrees: number) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = cities.find(c => c.name === event.target.value);
    if (city) {
      setSelectedCity(city);
      setLoading(true);
    }
  };

  if (loading) {
    return <div className="weather-widget loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="weather-widget error">{error}</div>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-widget">
      <h3>Current Weather</h3>
      <div className="city-selector">
        <select value={selectedCity.name} onChange={handleCityChange}>
          {cities.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}, {city.country}
            </option>
          ))}
        </select>
      </div>
      <div className="weather-content">
        <div className="weather-main">
          <span className="weather-icon">{getWeatherIcon(weather.weatherCode)}</span>
          <span className="temperature">{Math.round(weather.temperature)}°C</span>
        </div>
        <div className="weather-details">
          <div className="weather-detail">
            <span className="label">Wind:</span>
            <span className="value">{Math.round(weather.windSpeed)} km/h {getWindDirection(weather.windDirection)}</span>
          </div>
          <div className="weather-detail">
            <span className="label">Precipitation:</span>
            <span className="value">{weather.precipitation} mm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
