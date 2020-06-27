import {GET_ORDERS_LIST} from './types';

export let getOrdersList = () => {
	return {
		type: GET_ORDERS_LIST,
		payload: {
			url: '/ordersList',
			method: 'post',
			params: {
				phone: 15005184823
			}
		}
	}
}