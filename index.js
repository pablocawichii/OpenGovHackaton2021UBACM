var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose      = require('mongoose');


//



mongoose.connect("mongodb+srv://root:SwwyBdV8sPVCz4bx@cluster0.xpjam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/static', express.static('node_modules/bootstrap/dist'))
app.use('/static', express.static('node_modules/leaflet/dist'))

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",function(req, res){
	res.render("home");
});

app.get("/clinics",function(req, res){
	res.render("clinics");
});

app.get("/heatmap",function(req, res){
	res.render("heatmap");
});


app.get("/:id", function(req, res){
	res.send(req.params.id);
})

app.listen(3000, function(){
	console.log("Server is running at port 3000.");
});