import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../stores/authReducer";
import { clearNotes } from "../stores/notesReducer";

export const LogoutPage = () => {
	const dispatch = useDispatch();

	const logout = async () => {
		await axios.get("/api/auth/logout");
		dispatch(clearNotes());
	};

	useEffect(() => {
		logout();
		dispatch(setLoggedIn(false));
	}, [dispatch]);

	return <h1>You are now logged out</h1>;
};
