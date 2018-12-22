var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	name: String;
	college: String;
});

var User = mongoose.model("User", userSchema);
module.exports = User;