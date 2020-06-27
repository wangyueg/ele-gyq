import * as Types from './types';

export const getTopBanner = () => {
	return {
		type: Types.GET_TOP_BANNER,
		payload: {
			url: '/discovers/topBanner'
		}
	}
}