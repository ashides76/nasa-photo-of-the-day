import React, { useState, useEffect } from 'react'
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import axios from 'axios';
import NasaDetail from './components/NasaDetail'

function App() {
  
  const [nasaData, setNasaData] = useState([]);


  useEffect(() => {
  console.log('response started');
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res);
        setNasaData(res.data);
      })
      .catch(err => console.log('error getting data from NASA API', err))
  }, []);

  return (
    <div className="App">
      <NasaDetail nasaData={nasaData}/>
    </div>
  );
}

export default App;
