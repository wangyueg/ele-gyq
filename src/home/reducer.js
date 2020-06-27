export default (state={name: 'GYQ'}, action) => {
	switch(action.type) {
		case 'LIANXI':
			return {
				...state,
				
				name: 'GYQGYQ'
			}
		default:
			return state;
	}
}