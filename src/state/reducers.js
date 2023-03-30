import { combineReducers } from 'redux';

import { foodReducer } from "./food";

const reducers = combineReducers({
  food: foodReducer,
});

export default reducers;