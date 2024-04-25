import React from 'react'
import './WeatherApp.css'
import { useState } from 'react';
import search_icon from '../Asset/search.png';
 import clear_icon from '../Asset/clear.png';
import cloud_icon from '../Asset/cloud.png';
 import drizzle_icon from '../Asset/drizzle.png';
 import snow_icon from '../Asset/snow.png';
import wind_icon from '../Asset/wind.png';
import humidity_icon from '../Asset/humidity.png'
export const Weatherapp = () => {
  let api_key = "create your api key using https://openweathermap.org/api";

  const [data, setData] = useState();
  const [wicon, setWicon] = useState();

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    console.log(element[0].value);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    setData(data);
    setWicon(wicon);
    console.log(data);
    console.log(data.weather[0].icon);

     if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setWicon(clear_icon);
    }
    else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n')
    {
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n')
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n')
    {
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n')
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n')
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon === '11d' || data.weather[0].icon === '11n')
    {
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n')
    {
      setWicon(snow_icon);
    }
  }

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='search your city name' />
        <div className="search_icon" onClick={() => { search() }}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={data?wicon:null} alt="" />
      </div>
      <div className="weather-temp">{data?data.main.temp:null}</div>
      <div className="weather-location">{data?data.name:null}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className='icon' />
          <div className="data">
            <div className="humidity-perc">{data?`${data.main.humidity}%`:null}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className='icon' />
          <div className="data">
            <div className="wind-rate">{data?`${data.wind.speed} km/h`:null}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Weatherapp
