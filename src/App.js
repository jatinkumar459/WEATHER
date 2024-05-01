import React from "react";
import CitySelector from './components/CitySelector';
import "./App.css";
import {API_KEY, API_BASE_URL} from "./components/config";
import Weather from "./components/WeatherList";
import WeatherList from "./components/weather1";
import UseFetch from './components/UseFetch';
const App = () =>{
 const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };
  return (
    <div className="App">
<h1>Weather App</h1>
<div class="icon sun-shower">
  <div class="cloud"></div>
  <div class="sun">
    <div class="rays"></div>
  </div>
  <div class="rain"></div>
</div>

<div class="icon thunder-storm">
  <div class="cloud"></div>
  <div class="lightning">
    <div class="bolt"></div>
    <div class="bolt"></div>
  </div>
</div>

<div class="icon cloudy">
  <div class="cloud"></div>
  <div class="cloud"></div>
</div>

<div class="icon flurries">
  <div class="cloud"></div>
  <div class="snow">
    <div class="flake"></div>
    <div class="flake"></div>
  </div>
</div>

<div class="icon sunny">
  <div class="sun">
    <div class="rays"></div>
  </div>
</div>

<div class="icon rainy">
  <div class="cloud"></div>
  <div class="rain"></div>
</div>
<br></br>
<br></br>
<h1>See weather details here:-</h1>
      <Weather />
      <br></br>
      <br></br>
      <h1>See next 12 hours weather forecast here:-</h1>
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />
 {getContent()}
    </div>
  );
}

export default App;
