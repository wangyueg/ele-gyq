import * as Types from './types';

export const getEleIcon = () => {
	return {
		type: Types.GET_ELE_ICON,
		payload: {
			url: '/icons/getEleIcon'
		}
	}
}

export const login = (phone, password) => {
	return {
		type: Types.LOGIN,
		payload: {
			url: '/user/login',
			method: 'post',
			params: {
				phone,
				password
			}
		}
	}
}

export const updateLoginFlag = () => {
	return {
		type: Types.LOGIN_MSG_UPDATE
	}
}