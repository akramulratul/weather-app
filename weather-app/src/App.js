import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/weather/Weather';
import 'weather-icons/css/weather-icons.css';


//api call api
const API_key='e8f2ccea0350442dc80663c8d667bf37'


function App() {
  
const [city, setCity]= useState([]);
const [loading, setLoading]=useState(true);
useEffect(()=>{
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${API_key}`)
  .then(res => res.json())
  .then(data => {
    
    if (data) {
      
      setCity(data)
      setLoading(false)

    
    }
    
  
  });
  
}, [])

  return (
    <div className="App"> 
      {
        loading === false?<Weather city={city}></Weather>:<h1>loading....</h1>
      }
    </div>
  );
};

export default App;
