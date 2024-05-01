import React from 'react'
import WeatherCard from './weather2'
import './weather.css';
const WeatherList = ({weathers}) => {
    return (
      <div className="f">
           {weathers.map(({dt,main, weather}) => (
                <React.Fragment key={dt}>
                    <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon}/>
                </React.Fragment>
            ))} 
        </div>
    )
}

export default WeatherList;
