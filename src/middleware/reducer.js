import * as Types from './types';

export default (state = {}, action) => {
	switch(action.type) {
		case Types.FETCH_REQUEST:
			return {
				...state,

			}
		case Types.FETCH_REQUEST_SUCCESS:
			return {
				...state,
				code: data.code,
				msg: data.msg,
				data: action.data
			}
		case Types.FETCH_REQUEST_FAIL:
			return {
				...state,
				code: data.code,
				msg: data.msg
			}
		default:
			return state;
	}
}