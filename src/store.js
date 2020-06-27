import {createStore, applyMiddleware, compose} from 'redux';
import fetchData from './middleware';
import reducer from './reducer';

let store = applyMiddleware(fetchData)(createStore)(reducer);

export default store; 