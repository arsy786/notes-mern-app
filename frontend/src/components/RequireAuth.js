import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../stores/authReducer";

const RequireAuth = (props) => {
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	const dispatch = useDispatch();

	useEffect(() => {
		if (loggedIn === null) {
			dispatch(checkAuth());
		}
	}, [dispatch, loggedIn]);

	if (loggedIn === null) {
		return <div>Loading</div>;
	}

	if (loggedIn === false) {
		return <Navigate to="/login" />;
	}

	return <div>{props.children}</div>;
};

export default RequireAuth;
