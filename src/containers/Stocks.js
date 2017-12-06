import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component{
	render(){
		console.log(this.props.weatherData);
		return(
			<h1>Sanity Check Stocks</h1>
		)
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