import React from "react";

const LoginForm = () => {
	return (
		<form>
			<input type="email" name="email" />
			<input type="password" name="password" />
			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
