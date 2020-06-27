const Config = require('../../config.js');

export default (payload) => {
	let env = process.env.NODE_ENV;
	let url = Config[env]['url'] + Config[env]['urlRoute'] + payload.url; 
	let method = payload.method || 'get';

	let fetchParams = {
		method: method.toUpperCase(),
		headers: {
		    'Content-Type': 'application/json'
		},
		credentials: 'include'
	};

	if(method.toLowerCase() !== 'get' && payload.params) {
		fetchParams.body = JSON.stringify(payload.params);
	}


	return fetch(url, {
		...fetchParams
	})
	.then(res => res.json())
	.then(data => data)
	.catch(err => console.log(err)); 
}