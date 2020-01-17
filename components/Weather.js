import React from "react";

const Weather = props => (
    <div className="weather_result">    
        {props.city && props.country && 
        <p className="weather__key">Location:
            <span className="weather__value"> {props.city}, {props.country}</span>
        </p>}

        {props.description && 
        <p className="weather__key">Weather condition:
            <span className="weather__value"> {props.description}</span>
        </p>}

        {props.temperature && 
        <p className="weather__key">Current temperature:
            <span className="weather__value"> {props.temperature}</span>°C
        </p>}

        {props.feels_like && 
        <p className="weather__key">Feels like:
            <span className="weather__value"> {props.feels_like}</span>°C
        </p>}

        {props.wind&& 
        <p className="weather__key">Wind speed:
            <span className="weather__value"> {props.wind}</span> km/h
        </p>}

        {props.humidity && 
        <p className="weather__key">Humidity:
            <span className="weather__value"> {props.humidity}</span>%
        </p>}

        {props.error && 
        <p className="weather__key">Error:
            <span className="weather__error"> {props.error}</span>
        </p>}
    </div>
);

export default Weather;
