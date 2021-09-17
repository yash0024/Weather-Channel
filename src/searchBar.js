import React, { useState, useEffect, useCallback } from 'react';
import './index.css';
import NavBar from './NavBar.js';

 function SearchBar() {
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [foundCities, setFoundCities] = useState(null);
  const [citiesToDisplay, setCitiesToDisplay] = useState(["Toronto"])

  useEffect(() => {
      const apiUrl = 'https://countriesnow.space/api/v0.1/countries';
      fetch(apiUrl)
        .then((res) => res.json())
        .then((info) => {
          const arr = [];
          const cityInfo = info.data.map((ob) => ob.cities)
          for (var i = 0; i < cityInfo.length; i++) {
              arr.push(...cityInfo[i]);}
          const arrNoDuplicates = [...new Set(arr)];
          setData(arrNoDuplicates);
        });
    }, [setData]);


  const filter = (e) => {
  const keyword = e.target.value;

  if (keyword !== '') {
    const results = data.filter((city) => {
      return city.toLowerCase().startsWith(keyword.toLowerCase());
    });
    setFoundCities(results);
  } else {
    setFoundCities(null);
  }

  setName(keyword);
  };

  function handlClick(city)  {
       let arr = citiesToDisplay;
       if (!arr.includes(city)) {
       arr.push(city); }
       setCitiesToDisplay(arr);
       forceUpdate();
   };


  return (
    <div>
    <div className="search">
      <input
        type = "search"
        value = {name}
        onChange = {filter}
        className = "input"
        placeholder = "Search for a city"
      />

    {foundCities && foundCities.length > 0 ? (
      <div className="user-list">
          {foundCities.map((city) => (
            <button
              className = "user"
              value = {city}
              style = {{backgroundColor:
                citiesToDisplay.includes(city) ? "blue" : "grey"}}
              onClick = {() => handlClick(city)}
              >
              <span className = "city-name">{city}</span>
            </button>))}
      </div>) :
      null}
    </div>
    <div>
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
    <br></br>
    <br></br>
    <NavBar citiesToShow = {citiesToDisplay}/>
    </div>
  </div>
  );
  }


export default SearchBar;
