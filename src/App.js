import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import WeatherDisplay from "./components/WeatherDisplay";
import './App.css'
import axios from 'axios'

const API_KEY = "e98910bc3848dcac21e2226526cf2102"
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=`
export const weatherData = React.createContext()
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [weather, setWeather] = useState([])

  const fetching = (e) => {
    if (e.code === "Enter") {
      axios.get(`${API_URL}${inputValue}&appid=${API_KEY}&units=metric`).then(res => {
        console.log(res)
        setWeather(res.data)
        setIsLoading(false)
        setError(false)
      }).catch(err => setError(true))
    }
  }
  return (
    <div className="App">
      <Navbar fetching={fetching} inputValue={inputValue} setInputValue={setInputValue} />
      <weatherData.Provider value={weather}>
        <WeatherDisplay isLoading={isLoading} error={error} />
      </weatherData.Provider>
    </div>
  );
}

export default App;
