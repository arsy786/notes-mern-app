const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

/* [POST] Signup Credentials */
// Get the email and password off req body, Hash password, Create a user with the data, Respond
const signup = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const hashedPassword = bcrypt.hashSync(password, 8);

		await User.create({ email, password: hashedPassword });
		res.sendStatus(200);
	} catch (err) {
		next(err);
	}
};

/* [POST] Login Credentials */
// Get the email and password off req body, Find the user with requested email, Compare sent in password with found user password hash, Create a jwt token, Set the cookie, Send it
const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		const passwordMatch = bcrypt.compareSync(password, user.password);

		if (!user || !passwordMatch) {
			next(
				Object.assign(new Error("Authentication failed"), { statusCode: 401 })
			);
		}

		const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // 30 days in ms
		const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

		res.cookie("Authorization", token, {
			expires: new Date(exp),
			httpOnly: true,
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
		});

		res.sendStatus(200);
	} catch (err) {
		next(err);
	}
};

/* [GET] Logout */
// Clear Authorization Cookie
const logout = (req, res, next) => {
	try {
		res.cookie("Authorization", "", { expires: new Date() });
		res.sendStatus(200);
	} catch (err) {
		next(err);
	}
};

/* [GET] Check is User is Authorized */
// Send 200 if Authorized, 400 otherwise
const checkAuth = (req, res, next) => {
	try {
		res.sendStatus(200);
	} catch (err) {
		next(err);
	}
};

const userController = {
	signup,
	login,
	logout,
	checkAuth,
};

module.exports = userController;
