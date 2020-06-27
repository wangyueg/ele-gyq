import * as Types from './types';

export default (state={}, action) => {
	switch(action.type) {
		case Types.GET_ELE_ICON:
			const data = action.payload.data;
			return {
				...state,
				logoName: data.name,
				logoUrl: data.url
			}
		case Types.LOGIN_FAIL:
			return {
				...state,
				loginFlag: true,
				loginCode: action.payload.code,
				loginMessage: action.payload.msg
			}
		case Types.LOGIN:
			return {
				...state,
				loginFlag: true,
				loginCode: action.payload.code,
				loginMessage: action.payload.msg || '',
				loginSuccessData: action.payload.data 
			}
		case Types.LOGIN_MSG_UPDATE:
			return {
				...state,
				loginFlag: false
			}
		default:
			return state;
	}
}