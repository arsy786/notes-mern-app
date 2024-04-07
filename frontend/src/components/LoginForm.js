import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	checkAuth,
	login,
	resetLoginForm,
	setLoginForm,
} from "../stores/authReducer";

const LoginForm = () => {
	const loginForm = useSelector((state) => state.auth.loginForm);
	const loadingLogin = useSelector((state) => state.auth.loadingLogin);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const updateLoginForm = (e) => {
		const { name, value } = e.target;
		dispatch(
			setLoginForm({
				...loginForm,
				[name]: value,
			})
		);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch(login(loginForm)).then(() => {
			// dispatch(checkAuth());
			dispatch(resetLoginForm());
			navigate("/");
		});

		// instead of manually setting loggedIn state, can run checkAuth
		// dispatch(checkAuth()).then(() => {
		// 	dispatch(resetLoginForm());
		// 	navigate("/");
		// });
	};

	return (
		<form onSubmit={handleLogin}>
			<input
				onChange={updateLoginForm}
				value={loginForm.email}
				type="email"
				name="email"
				disabled={loadingLogin}
			/>
			<input
				onChange={updateLoginForm}
				value={loginForm.password}
				type="password"
				name="password"
				disabled={loadingLogin}
			/>
			<button type="submit" disabled={loadingLogin}>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
