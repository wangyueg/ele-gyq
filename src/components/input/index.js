import React from 'react';
import './index.less';

export default (props) => {
	let {placeholder} = props;

	return (
		<div className="ele-input-container">
			<input type="text" placeholder={placeholder} onChange={} />
		</div>
	);
}