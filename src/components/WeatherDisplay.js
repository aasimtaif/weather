import React , {useContext} from 'react'
import "../styles/weatherDisplay.css";
import {weatherData} from "../App"


function WeatherDisplay({isloading , error}) {

    const data  = useContext(weatherData)
   
    console.log(data)
    // return (
    //     <></>
    // )
    if(isloading){
        return (
            <>Loading......</>
        )
    }
    if(error){
        return (
            <div className='card'>
            <h2>Error...</h2>
            <h2>city not found</h2>
            </div>
        )
    }
    if(data.length !== 0){
    const icon_url  = data.weather[0].icon
    
    return (
        <div className="card">
            <h2>{data.name}</h2>
            <h3>
                {data.weather[0].main}
                <span>
                    Wind {data.wind.speed} m/s
                </span>
                
        
            </h3>
        
            <div className="sky">
            <img
                    src={`http://openweathermap.org/img/w/${icon_url}.png`}
                    alt="weather status icon"
                    className="weather-icon"
                />
                <p className='humidity'> 
                    Humidity: {data.wind.speed} m/s
                </p>
            </div>
            <h1 className='temp'>{Math.round(data.main.temp)}°</h1>
        </div>

    ) 
       
    }else{
        return null
    }

}

export default WeatherDisplay