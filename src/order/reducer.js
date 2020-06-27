import {GET_ORDERS_LIST} from './types';

export default (state={}, action) => {
	switch(action.type) {
		case GET_ORDERS_LIST:
			return {
				...state,
				ordersData: action.payload.data,
				ordersMsg: action.payload.msg,
				ordersCode: action.payload.code
				
			}
		case 'STUDY_ENHANCER':
			return {
				...state,
				name: '111111'
			}
		default:
			return state;
	}
}