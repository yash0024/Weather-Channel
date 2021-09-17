import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import WeatherBox from './weathercomp.js';
import SearchBar from './searchBar.js';
import NavBar from './NavBar.js';


class WeatherChannel extends React.Component {
  contructor() {
    this.ref = React.createRef();
  }

  render() {

    return (
      <div className = 'main'>
          <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(
  <WeatherChannel />,
  document.getElementById('root')
);
