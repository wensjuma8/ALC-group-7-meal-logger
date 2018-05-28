const express = require("express");
const router = express.Router();

// @route   GET '/register'
// desc     Get register route
// access   Public
router.get("/register", (req, res) => res.render("register.hbs"));

// @route   POST '/register'
// desc     Post to register route
// access   Public
router.post("/register");

// @route   GET '/'
// desc     Get register route | This acts as homepage and login page
// access   Public
router.get("/", (req, res) => res.render("home.hbs"));

// @route   GET '/meals'
// desc     Get all meals route
// access   Private
router.get("/meals", (req, res) => res.render("view-logs.hbs"));

// @route   GET '/profile'
// desc     Get profile route
// access   Private
router.get("/profile", (req, res) => res.render("profile.hbs"));

// @route   POST '/profile'
// desc     post new meal route
// access   Private
router.post("/create-log");

// @route   GET '/meals/id'
// desc     Get meal route
// access   Private
router.get("/meals/:id");

// @route   PUT '/meals/id'
// desc     Update meal route
// access   Private
router.put("/meals/:id");

// @route   DELETE '/meals/id'
// desc     Delete meal route
// access   Private
router.delete("/meals/:id");

module.exports = router;
