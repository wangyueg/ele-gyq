import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => {
	let [isShow, setIsShow] = useState(false);

	return (
		<NavLink
			to={props.to}
			className={props.className}
			isActive={(match) => {
				if(!match) {
					setIsShow(false);
					return false;
				}
				setIsShow(true);
				return true;
			}}
		>
			{isShow && props.activeImage ? <img src={props.activeImage} /> : null}
			{!isShow && props.depressiveImage ? <img src={props.depressiveImage} /> : null}
			<span style={{color: isShow ? '#2196F3' : null}}>{props.title}</span>
		</NavLink>
	);
}