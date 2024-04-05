import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn, setLoginForm } from "../stores/authReducer";

const LoginForm = () => {
	const loginForm = useSelector((state) => state.auth.loginForm);
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
		const res = await axios.post("/api/auth/login", loginForm);
		console.log(res);
		dispatch(setLoggedIn(true));
		dispatch(
			setLoginForm({
				email: "",
				password: "",
			})
		);
		navigate("/");
	};

	return (
		<form onSubmit={handleLogin}>
			<input
				onChange={updateLoginForm}
				value={loginForm.email}
				type="email"
				name="email"
			/>
			<input
				onChange={updateLoginForm}
				value={loginForm.password}
				type="password"
				name="password"
			/>
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
