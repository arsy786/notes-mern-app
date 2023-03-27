const express = require("express");
const userController = require("../controllers/user.controller");
const { requireAuth } = require("../middleware/auth.middleware");

const router = express.Router();

// USER / AUTH ROUTES
router.post("/auth/signup", userController.signup);
router.post("/auth/login", userController.login);
router.get("/auth/logout", userController.logout);
router.get("/auth/check-auth", requireAuth, userController.checkAuth);

module.exports = router;
