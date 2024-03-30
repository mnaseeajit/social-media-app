import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import Redux Thunk middleware
import  combineReducers  from "../Components/Reducer";// Import your combined reducer

const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;
