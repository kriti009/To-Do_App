var express = require("express");
var app = express();
var mongoose = require("mongoose");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost/ToDO",{ useNewUrlParser: true});

//define models
var userSchema = new mongoose.Schema({
	name: String,
	college: String
});
var User = mongoose.model("User", userSchema);

var user = {
	name: "Rachana dewangan",
	college: "MMBS"
};

// User.create(user, function(err, newuser){
// 	if(err){
// 		console.log("err");
// 	}else{
// 		console.log("New User Data Added!");
// 		console.log(newuser);
// 	}
// });
User.find({}, function(err, founduser){
	if(err){
		console.log(err);
	}else{
		console.log(founduser);
	}

});

//routes
app.get("/", function(req, res){
    res.render("ToDO.ejs");
});
app.listen(3000, function(){
    console.log("Server Connected!!");
});

