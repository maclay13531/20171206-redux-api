// this is a reducer
// to make a reducer
// 1. make a function that has 2 params:
	// -state (usually set a default)
	// -action
// 2. The state param contains THIS reducers state. Just like a variable.
// 3. The action param will contain whatever the object the dispatched action sent us
	// -type (required)
	// -payload (data/JSON/stuff)
// 4. Check the action.type to see if I care
// 4a. If I care, return some new state
// 4b. IF i don't care, return state (old state)

export default function(state = null, action){ //reducer step 1,3 & 4
	switch(action.type){
		case "GET_WEATHER":
			// console.log(action);
			// console.log(action.payload);
			// console.log(action.payload.data);
			return action.payload;
			break;
		//do some stuff
		case "GET_STOCKS":
		//do some other stuff
			break;
		default:
		//IF neither case happens, do this
			return state;
	}
}


// A switch statement is an if statement that checks the value of ONE thing AND ONLY one thing.