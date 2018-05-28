const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const hbs = require("hbs");

const user = require("./routes/user");

const app = express();

// Set templating engine
app.set("view engine", "hbs");

// Register partials
hbs.registerPartials(__dirname + "views/partials");

// BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database configuration
const db = require("./config/keys").mongoURI;

//Connect to database
mongoose
  .connect(db)
  .then(() => {
    console.log(`Mongoose connected to MongoDB successfully`);
  })
  .catch(err => {
    console.log(`Error connecting to database: ${err}`);
  });

app.use("/", user);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
