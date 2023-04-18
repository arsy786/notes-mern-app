import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginForm } from "../stores/authReducer";

const LoginForm = () => {
	// const loginForm = useSelector((state) => state.auth.loginForm);
	const dispatch = useDispatch();

	// const updateLoginForm = (e) => {
	// 	const { name, value } = e.target;
	// 	dispatch(
	// 		setLoginForm({
	// 			...loginForm,
	// 			[name]: value,
	// 		})
	// 	);
	// };

	return (
		<form>
			<input
				// onChange={updateLoginForm}
				// value={loginForm.email}
				type="email"
				name="email"
			/>
			<input
				// onChange={updateLoginForm}
				// value={loginForm.password}
				type="password"
				name="password"
			/>
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
