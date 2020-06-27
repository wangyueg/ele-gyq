import * as Types from './types';

export default (state={}, action) => {
	switch(action.type) {
		case Types.GET_TOP_BANNER:
			return {
				...state,
				topBanner: action.payload.data
			}
		default:
			return state;
	}
}