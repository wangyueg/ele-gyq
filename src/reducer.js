import {combineReducers} from 'redux';
import OrderState from './order/reducer';
import HomeState from './home/reducer';
import LoginState from './login/reducer';
import DiscoverState from './discover/reducer';

export default combineReducers({
	OrderState,
	HomeState,
	LoginState,
	DiscoverState
});