import React, { useState, useEffect } from 'react'
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import axios from 'axios';

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
