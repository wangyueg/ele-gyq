import fetch from './fetch';
import * as Types from './types';

export default ({dispatch, getState}) => (next) => async (action) => {
	if(action.payload && action.payload.url && action.type) {
		try {
			//异步请求数据
			let data = await fetch(action.payload);

			if(data.code === 0) {
				dispatch({
					type: action.type,
					payload: {
						code: data.code,
						msg: data.msg,
						data: data.data
					}
				});
			} else {
				dispatch({
					type: `${action.type}_FAIL`,
					payload: {
						code: data.code,
						msg: data.msg
					}
				});
			}
		} catch(err) {
			console.log(err);
		}
	} else {
		return next(action);
	}
}