import React, { useState, useEffect } from 'react'
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import axios from 'axios';
import NasaDetail from './components/NasaDetail'

function App() {
  
  const [nasaData, setNasaData] = useState();
  const [date, setDate] = useState('2023-03-06');
  // console.log(date);

 
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
      .then(res => {
        // console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => console.log('error getting data from NASA API', err))
  }, [date]);

  return (
    <div className="App">
      {nasaData && <NasaDetail nasaData={nasaData} setDate={setDate}/>}
    </div>
  );
}

export default App;
