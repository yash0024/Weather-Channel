import React, { useState, useEffect }  from 'react';
import CityWeather from './CitysWeather.js';

function CitiesWeather({displayCities}) {

  const [appState, setAppState] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=07132cc8651c89aac96045a518332f1d';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((city) => {
        setAppState(city);
      });
  }, [setAppState]);


    return (
      <div className = 'citiesWeather'>
          {displayCities.map((city) =>
          <CityWeather cityName = {city}/>)}
      </div>
    )
}

export default CitiesWeather;
