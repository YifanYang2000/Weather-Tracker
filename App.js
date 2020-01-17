import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const api_key = "dd456f9212f065ab8678656adea8ada4";

class App extends React.Component{
    state = {
        city: undefined,
        country: undefined,
        description: undefined,
        temperature: undefined,
        wind: undefined,
        feels_like: undefined,
        humidity: undefined,
        error: undefined
    }
    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
            console.log(data);
            
            this.setState({
                city: data.name,
                country: data.sys.country,
                description: data.weather[0].description,
                temperature: data.main.temp,
                wind: data.wind.speed,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                error: ""
            });
        } else {
            this.setState({
                city: undefined,
                country: undefined,
                description: undefined,
                temperature: undefined,
                wind: undefined,
                feels_like: undefined,
                humidity: undefined,
                error: "Please enter a city and a country."
            });
        }
    }
    render(){
        return(
            <div>
                <div className="back">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-7 form-box">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather 
                                        city={this.state.city}
                                        country={this.state.country}
                                        description={this.state.description}
                                        temperature={this.state.temperature}
                                        wind={this.state.wind}
                                        feels_like={this.state.feels_like}
                                        humidity={this.state.humidity}
                                        error={this.state.error}
                                    />
                                </div>
                                <div className="col-xs-5 title-box">
                                    <Titles />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;