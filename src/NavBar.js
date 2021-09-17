import React, { Component } from 'react';
import CitiesWeather from './CitiesWeather.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
  }

  handleNav = (direction) => {
    if (direction === 'left') {
      if (this.navRef) {this.navRef.current.scrollLeft -= 784.6}
    } else {
      if (this.navRef) {this.navRef.current.scrollLeft += 785}
    }
  }

  render() {
    const cities = this.props.citiesToShow;
    return (
      <div className='menu-container'>
        <div>
          <button onClick={() => this.handleNav('left')}><i className="round"></i>&#8249;</button>
        </div>
        <div className='nav-items' ref={this.navRef}>
        <CitiesWeather displayCities = {cities}/>
        </div>
        <div>
          <button onClick={() => this.handleNav('right')}><i className="round">&#8250;</i></button>
        </div>
      </div>
    );
  }
}

export default NavBar;
