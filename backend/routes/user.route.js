const express = require("express");
const userController = require("../controllers/user.controller");
const { requireAuth } = require("../middleware/auth.middleware");

const router = express.Router();

// USER / AUTH ROUTES
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/check-auth", requireAuth, userController.checkAuth);

module.exports = router;
