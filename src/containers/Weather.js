import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component{
	render(){
		console.log(this.props.weatherData);
		if(this.props.weatherData === null){
			return(
				<h1>Please search above</h1>
			)
		}else{
			const weatherInfo = this.props.weatherData.data;
			const temp = weatherInfo.main.temp;
			const icon = weatherInfo.weather[0].icon;
			const city = weatherInfo.name;
			return(
				<h1>The weather in {city} is currently {temp}</h1>
			)
		}
	}
}

function mapStateToProps(state){
	return{
		weatherData: state.weather
	}
}

// connect takes max of 2 args
// 1. state function
// 2. dispatch/action function
export default connect(mapStateToProps, null)(Weather);
// export default Weather;