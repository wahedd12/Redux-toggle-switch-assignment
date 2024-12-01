const redux = require('redux')

// Action type
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';

// Action creator
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});

// Reducer
const initialState = false; // default state is OFF (false)

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return !state; // Flip the boolean value
    default:
      return state;
  }
};

// Create the Redux store
import { createStore } from 'redux';

const store = createStore(toggleReducer);

// Subscribe to store updates
store.subscribe(() => {
  const state = store.getState();
  console.log(`Switch is ${state ? 'ON' : 'OFF'}`);
});

// Dispatch an action to toggle the state
store.dispatch(toggleSwitch()); // Toggles the state to ON
store.dispatch(toggleSwitch()); // Toggles the state to OFF
