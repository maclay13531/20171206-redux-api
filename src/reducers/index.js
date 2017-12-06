// this is the rootreducer!!!
// to make a rootreducer
// 1. Get combineReducers method from redux
// 2. call combinereducers method and pass it an object
// 3. each key/property of object, will be a single piece of application/redux state
// 4. each value will be a single reducer (import)

import { combineReducers } from 'redux'; //rootreducer step 1
import WeatherReducer from './WeatherReducer'; // main step 5

const rootReducer = combineReducers({ //rootreducer step 2
	weather: WeatherReducer, //rootreducer step 3 & 4
})


export default rootReducer