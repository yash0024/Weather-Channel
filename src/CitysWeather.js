import React, { Component } from 'react';
import WeatherBox from './weathercomp.js';

class CityWeather extends Component {
  render() {
    return (
      <div className = 'cityWeather'>
      <div>
        <center>{this.props.cityName}</center>
      </div>
      <div>
      <WeatherBox />
      <WeatherBox />
      <WeatherBox />
      <WeatherBox />
      <WeatherBox />
      </div>
    </div>
  )
  }
}

export default CityWeather;
