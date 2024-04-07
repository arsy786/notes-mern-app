import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavBar = () => {
	const user = useSelector((state) => state.auth.user);
	const loadingCheckAuth = useSelector((state) => state.auth.loadingCheckAuth);
	const loadingLogout = useSelector((state) => state.auth.loadingLogout);

	if (loadingCheckAuth) {
		return null; // or loading indicator
	}
	if (loadingLogout) {
		return null; // or loading indicator
	}

	return (
		<ul>
			{user ? (
				<>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/logout">Logout</Link>
					</li>
					<p>{user}</p>
				</>
			) : (
				<>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/signup">Signup</Link>
					</li>
				</>
			)}
		</ul>
	);
};
