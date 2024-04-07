import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	checkAuth,
	resetSignupForm,
	setSignupForm,
} from "../stores/authReducer";

export const SignupForm = () => {
	const signupForm = useSelector((state) => state.auth.signupForm);
	const loadingCheckAuth = useSelector((state) => state.auth.loadingCheckAuth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const updateSignupForm = (e) => {
		const { name, value } = e.target;
		dispatch(
			setSignupForm({
				...signupForm,
				[name]: value,
			})
		);
	};

	const handleSignup = async (e) => {
		e.preventDefault();
		const res = await axios.post("/api/auth/signup", signupForm);
		console.log(res);

		dispatch(checkAuth()).then(() => {
			dispatch(resetSignupForm());
			navigate("/");
		});
	};

	return (
		<form onSubmit={handleSignup}>
			<input
				onChange={updateSignupForm}
				value={signupForm.email}
				type="email"
				name="email"
				disabled={loadingCheckAuth}
			/>
			<input
				onChange={updateSignupForm}
				value={signupForm.password}
				type="password"
				name="password"
				disabled={loadingCheckAuth}
			/>
			<button type="submit" disabled={loadingCheckAuth}>
				Signup
			</button>
		</form>
	);
};
