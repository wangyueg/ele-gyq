import React from "react";
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import MiddlewareOne from '../middleware';
import MiddlewareTwo from '../middleware/middleware'

let reducer = (state, action) => {
	switch(action.type) {
		case 'ADD_ACTION':
			return state.concat(action.text);
		default:
			return state;
	}
}

let initState = ['GYQ']
// let store = createStore(reducer, initState);
//applyMiddleware返回的是一个enhancer (createStore) => (reducer, preloadedState) => {}
//applyMiddleware: (...middlewares) => (createStore) => (...argus) => {}
let store = applyMiddleware(logger, MiddlewareTwo,MiddlewareOne )(createStore)(reducer, initState);

store.dispatch({
	type: 'ADD_ACTION',
	text: 'XIAOMING'
});

console.log(store.getState())


export default () => <h1>HomeView</h1>