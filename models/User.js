const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema({
  //Define properties here
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("User", UserSchema);
