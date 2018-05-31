const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema({
  //Define properties here
});

module.exports = {
  User: new mongoose.model("User", UserSchema)
};
