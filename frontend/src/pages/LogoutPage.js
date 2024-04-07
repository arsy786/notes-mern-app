import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../stores/authReducer";
import { clearNotes } from "../stores/notesReducer";

export const LogoutPage = () => {
	const dispatch = useDispatch();
	const loadingLogout = useSelector((state) => state.auth.loadingLogout);

	useEffect(() => {
		dispatch(logoutUser());
		dispatch(clearNotes());
	}, [dispatch]);

	if (loadingLogout) {
		return null;
	}

	return <h1>You are now logged out</h1>;
};
