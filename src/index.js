import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import WeatherBox from './weathercomp.js';
import Header from './header.js';
import NavBar from './NavBar.js';


class WeatherChannel extends React.Component {
  contructor() {
    this.ref = React.createRef();
  }

  render() {

    return (
      <div className = 'main'>
          <Header />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <NavBar />
      </div>
    );
  }
}

ReactDOM.render(
  <WeatherChannel />,
  document.getElementById('root')
);
