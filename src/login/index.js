import React, {useState, useEffect, useRef} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreator';
import "./index.less";

const Login = (props) => {
	const phoneRef = useRef(null);
	const passwordRef = useRef(null);
	const { LoginState } = props;

	//login
	const _login = () => {
		const phone = phoneRef.current.value;
		const password = passwordRef.current.value;

		props.login(phone, password);
	}

	useEffect(() => {
		if(LoginState.loginFlag) {
			alert(LoginState.loginMessage);
			props.updateLoginFlag();
		}
	}, [LoginState.loginCode, LoginState.loginMessage, LoginState.loginData]);


	useEffect(() => {
		//get ele logo in login
		props.getEleIcon();
	}, []);

	return (
		<div className="login-container">
			<div className="ele-icon-container">
				{LoginState.logoUrl ? <img src={LoginState.logoUrl} alt={LoginState.logoName || "饿了么"} /> : null}
			</div>
			<div className="ele-input-container">
				<input ref={phoneRef} type="text" placeholder="手机号" />
			</div>
			<div className="ele-input-container">
				<input ref={passwordRef} type="text" placeholder="密码" />
			</div>
			<p className="agreement-container">新用户登录即自动注册，并表示已同意<span className="agreement">《用户服务协议》</span>和<span className="agreement">《隐私权政策》</span></p>
			<button onClick={_login} className="ele-login-btn">登录</button>
		</div>
	);	
}

export default connect(
	state => { return {LoginState: state.LoginState}},
	dispatch => bindActionCreators({...actionCreators}, dispatch)
)(Login);