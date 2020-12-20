import React from 'react';

const WEATHER_ICON = 'http://openweathermap.org/img/wn/';

export default function Weather(props) {

    console.log(props.data);

    const {name, sys, weather, main} = props.data;
    const temp_type = props.temp_type;

    const KtoC = temp => Math.floor(temp - 273.15);
    const KtoF = temp => Math.floor((temp - 273.15) * 9/5 + 32);

    const getTemp = temp => {
        let currentTemp;
        switch(temp_type) {
            case 'c': currentTemp = KtoC(temp) + '°C'; break;
            case 'f': currentTemp = KtoF(temp) + '°F'; break;
            case 'k': currentTemp = Math.floor(temp) + '°K'; break;
            default: break;
        }
        return currentTemp;
    }

    return (
        <div className="weather-box">
            <h2 className="city-country">{name}, {sys.country}</h2>
            <h1 className="temp">{getTemp(main.temp)}</h1>
            <img src={WEATHER_ICON + weather[0].icon + '@4x.png'} alt="Weather"/>
            <h5 className="desc">{weather[0].description}</h5>
            <div className="min-max">
                <p className="max">max: {getTemp(main.temp_max)}</p>
                <p className="max">min: {getTemp(main.temp_min)}</p>
            </div>
        </div>
    )
}
