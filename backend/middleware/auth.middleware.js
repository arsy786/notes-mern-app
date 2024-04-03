const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Read token off cookies, Decode the token, Check expiration, Find user using decoded sub, Attach user to req, Continue on
const requireAuth = async (req, res, next) => {
	try {
		const token = req.cookies.Authorization;
		const decoded = jwt.verify(token, process.env.SECRET);
		if (Date.now() > decoded.exp) return res.sendStatus(401);

		const user = await User.findById(decoded.sub);
		if (!user) return res.sendStatus(401);

		req.user = user;
		next();
	} catch (err) {
		console.log(err);
		return res.sendStatus(401);
	}
};

module.exports = { requireAuth };
