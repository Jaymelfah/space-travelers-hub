import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  mission: missionsReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
