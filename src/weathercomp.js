import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import sun from './sunnyweather.png';

class WeatherBox extends React.Component {
  render() {
    return (
    <div className = 'DailyWeatherDisplay'>
      <h3><center>Friday</center></h3>
      <center>March 1st</center>
      <br></br>
      <img  className = "WeatherPic"
        src = {sun}
        alt = "sun"
        width = "50"
        height = "50">
      </img>
      <b className = "weather">Sunny</b>
    </div>
  );
  }
}

export default WeatherBox;
