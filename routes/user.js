const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

// @route   GET '/register'
// desc     Get register route
// access   Public
router.get("/register", (req, res) => res.render("register.hbs"));

// @route   POST '/register'
// desc     Post to register route
// access   Public
router.post("/register", (req, res) => {
  const body = req.body;

  User.findOne({ email: body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ error: "This email is already registered" });
    } else {
      const newUser = new User({
        name: body.name,
        email: body.email,
        password: body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET '/'
// desc     Get register route | This acts as homepage and login page
// access   Public
router.get("/", (req, res) => res.render("home.hbs"));

// @route   POST '/'
// desc     Get register route | This acts as homepage and login page
// access   Public
router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      //Check if user exists
      if (!user) {
        return res.sendStatus(404).json({ error: "User not found" });
      }
      //Check if credentials match
      bcrypt
        .compare(password, user.password)
        .then(authenticated => {
          if (authenticated) {
            return res.json({ success: "User has been authenticated" });
          }
          return res.json({ error: "Invalid email/password combination" });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

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
