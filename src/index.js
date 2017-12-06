// In order to wire up a redux react app we need the following
// 1. provider component. This comes from react-redux
// 2. createStore. This comes from redux
// 3. reducers to give to createStore
// 4. Make a single rootReducer (3) to import our individual reducers
// 5. Make at least one individual reducer to import into root (4)
// 6. Create the store (2) with the reducers (3 -> 4 -> 5)
// 7. Put the provider component (1) with a prop of store with the store (6) around <app />
// 8. if we need redux middleware, we need to import it from redux (applyMiddleWare)
// 9. import redux-promise so that if an action needs to return a promise/async
// the middelware will tell redux to relax. I am coming
// 10. when we make the store, kind of like connect, we apply middle ware first
// then we hand it the createStore

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux stuff
import { Provider } from 'react-redux' //main step 1
import { createStore, applyMiddleware } from 'redux'; //main step 2 & 8
import reducers from './reducers/index'; //main step 3.  go to reducers/index folder for main step 4
import reduxPromise from 'redux-promise';
console.log(reducers)
//const theStore = createStore(reducers); //main step 6 -removing because we have middleware

// const theStoreWithMiddleWare =applyMiddleware(reduxPromise)(createStore)(reducers); <-- this is line 29. 30. 31. 
const middleWare = applyMiddleware(reduxPromise); //returns a function
const theStore = middleWare(createStore); //returns another function
const theStoreWithReducers = theStore(reducers); 

ReactDOM.render(
	<Provider store={theStoreWithReducers}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

