import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageProfileEleIcon from '../images/profile-ele-icon.png';
import './index.less';

export default () => {
	return (
		<div className='profile-container'>
			<NavLink className='entry-login-register-container' to='/login'>
				<img src={ImageProfileEleIcon} alt='icon' />
				<div className='login-register'>
					<span className='title'>登录/注册</span>
					<span className='descriptor'>登录后享受更多特权</span>
				</div>
				<span className='login-register-icon'><svg t="1593529723833" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3339" width="20" height="20"><path d="M434.944 790.624l-45.248-45.248L623.04 512l-233.376-233.376 45.248-45.248L713.568 512z" fill="#ffffff" p-id="3340"></path></svg></span>
			</NavLink>
		</div>
	);
}