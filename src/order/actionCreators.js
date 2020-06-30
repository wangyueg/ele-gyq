import * as Types from './types';

export let getOrdersList = () => {
	return {
		type: Types.GET_ORDERS_LIST,
		payload: {
			url: '/ordersList',
			method: 'post',
			params: {
				phone: 15005184823
			}
		}
	}
}

export let UpdateGetOrdersListFlag = () => {
	return {
		type: Types.UPDATE_GET_ORDERS_LIST_FLAG
	}
}