import * as Types from './types';

export default (state={}, action) => {
	switch(action.type) {
		case Types.GET_ORDERS_LIST:
			return {
				...state,
				getOrdersListFlag: true,
				ordersData: action.payload.data,
				ordersMsg: action.payload.msg,
				ordersCode: action.payload.code	
			}
		case Types.GET_ORDERS_LIST_FAIL:
			return {
				...state,
				getOrdersListFlag: true,
				ordersMsg: action.payload.msg,
				ordersCode: action.payload.code	
			}
		case Types.UPDATE_GET_ORDERS_LIST_FLAG:
			return {
				...state,
				getOrdersListFlag: false
			}
		default:
			return state;
	}
}