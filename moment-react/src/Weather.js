import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Weather extends Component {
    constructor(props){
        super(props);
        this.state= {
            query:'',
            currentWeather:{},
            forecast: [],
            city: ''
        }
    }

    currentWeather() {
        const API = '93491e6dadbe8a2ac36dc3e3855f670a'
        const BASE_URL1 = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
        const BASE_URL2 = "http://api.openweathermap.org/data/2.5/forecast/daily?id=4047656&units=imperial&cnt=7&zip=";
        const FETCH_URL1 = `${BASE_URL1}${this.state.query},us&APPID=${API}`
        const FETCH_URL2 = `${BASE_URL2}${this.state.query},us&APPID=${API}`
        console.log('current',FETCH_URL1)
        fetch(FETCH_URL1, {
            method: 'GET'
        }).then(response => response.json())
        .then(json => {
            // console.log('current json', json)
            this.setState({
                currentWeather:{
                    currentTemp: json.main.temp,
                    currentHum : json.main.humidity,
                    currentPressure : json.main.pressure,
                    currentDesc : json.weather[0].description,
                    currentWind : json.wind.speed,
                }
            })
        })

        fetch(FETCH_URL2, {
            method: 'GET'
        }).then(response => response.json())
        .then(json => {
            // console.log('forecast json', json)
            this.setState({
                city: json.city.name,
                forecast:json.list
            })
            // console.log('forecast', this.state.forecast[0])
        })
        setInterval(this.currentWeather(),1000)//3600000
        console.log('hit again!')
        

    }

    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                    <FormControl 
                        type='text'
                        placeholder='Zip Code'
                        value={this.state.query}
                        onChange={event => {this.setState({query: event.target.value})}}
                        onKeyPress={event => {if(event.key === 'Enter') {
                            this.currentWeather()
                        }
                        }}
                        />
                        <InputGroup.Addon onClick={() => this.currentWeather()}>
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <h1>{this.state.currentWeather.currentTemp}°</h1>
                <p>{this.state.city}</p>
            </div>
        );
    }
}

export default Weather;