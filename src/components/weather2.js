import React from 'react';
import './weather.css';
import './DisplayWeather.css';
const WeatherCard = ({dt,temp_min, temp_max, main, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
<div className="displayweather">
   <div className="maincard1">
<img className="weather-icon1" 
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" srcset="" />
<span className="cardtitle">
              {main} 
            </span>
        <h5>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
       </h5>
        <h5>Min: {temp_min}</h5>
        <h5>Max: {temp_max}</h5>
    </div>
    </div>
  );
};
export default WeatherCard;
