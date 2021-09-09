import React, { Component } from 'react';
import CityWeather from './CitysWeather.js';

class CitiesWeather extends Component {
  render() {
    return (
      <div className = 'citiesWeather'>
          <CityWeather cityName = "New York"/>
          <CityWeather cityName = "Toronto"/>
          <CityWeather cityName = "New Delhi"/>
          <CityWeather cityName = "San Francisco"/>
          <CityWeather cityName = "Beijing"/>
      </div>
    )
  }
}

export default CitiesWeather;
