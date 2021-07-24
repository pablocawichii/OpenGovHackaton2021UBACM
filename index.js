var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

//

// seed = [{"name":"Belize Healthcare Partners Ltd","latlng":{"lat":17.512574,"lng":-88.203574},"contactNum":"+1-501-280-5000","contactEmail":"info@belizehealthcare.com","website":"https://www.belizehealthcare.com/","address":"Corner Chancellor & Blue Marlin Avenues Belize City, Belize, C.A."},{"name":"Belize Medical Associates","latlng":{"lat":17.509818,"lng":-88.194019},"contactNum":"(501) 223-0302","contactEmail":"Bma_marketing@belizemedical.com","website":"https://belizemedical.com/","address":"5791 St. Thomas Street Belize City, Belize C.A."},{"name":"Burrell Boom Health Center","latlng":{"lat":17.567914,"lng":-88.402875},"address":"Burrell Boom Cutoff"},{"name":"Caye Caulker Health Center","latlng":{"lat":17.741339,"lng":-88.025186},"contactNum":"226-0166","website":"https://www.facebook.com/cayehealthbelize/","address":"Estrella Street"},{"name":"Cleopatra White PolyClinic II","latlng":{"lat":17.504571,"lng":-88.196143},"contactNum":"224-5213"},{"name":"Doctor Otto Rodrigues Poly Clinic II Polyclinic","latlng":{"lat":17.915464,"lng":-87.96683},"contactNum":"226-2536","website":"https://www.facebook.com/sanpedropolyclinic/","address":"Manta Ray Street"},{"name":"Karl Heusner Memorial Hospital","latlng":{"lat":17.506587,"lng":-88.195433},"contactNum":"223-1548","contactEmail":"pro@khmh.bz","website":"https://www.facebook.com/Karl-Heusner-Memorial-Hospital-1652699211621967/"},{"name":"Ladyville Health Center","latlng":{"lat":17.554912,"lng":-88.310645},"contactNum":"+501 225-2764"},{"name":"Matron Roberts Poly Clinic II","latlng":{"lat":17.495515,"lng":-88.193774},"contactNum":"+501 227-7170"},{"name":"Port Loyola Health Center","latlng":{"lat":17.488313,"lng":-88.200095},"contactNum":"+501 227-5354"},{"name":"Cayo Western Regional Hospital","latlng":{"lat":17.254337,"lng":-88.77532},"contactNum":"+501 822-2263"},{"name":"K & K Guerra Poly Clinic Clinic/ Mopan Clinic","latlng":{"lat":17.076277,"lng":-89.139618},"contactNum":"823-2079"},{"name":"San Ignacio Hospital","latlng":{"lat":17.159281,"lng":-89.089135},"contactNum":"804-2761","website":"sich@whr.health.gov.bz","address":"BULLET TREE ROAD , San Ignacio, Belize"},{"name":"Valley of Peace Health Center","latlng":{"lat":17.335617,"lng":-88.836991}},{"name":"Caledonia Health Center","latlng":{"lat":18.227889,"lng":-88.473191}},{"name":"Corozal Community Hospital","latlng":{"lat":18.398541,"lng":-88.394192},"contactNum":"422-3909","contactEmail":"drhmoffice@yahoo.com"},{"name":"Patchakan Clinic","latlng":{"lat":18.395368,"lng":-88.477253},"contactNum":"+501 673 5011","contactEmail":"pmcbelize@gmail.com","website":"https://presbyterianmedicalclinicbze.weebly.com/"},{"name":"Progresso Health Center","latlng":{"lat":18.234141,"lng":-88.406214}},{"name":"San Narcisio Health Center","latlng":{"lat":18.272317,"lng":-88.462416}},{"name":"Sarteneja Health Center","latlng":{"lat":18.353633,"lng":-88.147685},"contactNum":"604-0337"},{"name":"August Pine Ridge Health Center","latlng":{"lat":17.972236,"lng":-88.728291}},{"name":"Blue Creek Clinic","latlng":{"lat":17.89921,"lng":-88.901759},"contactNum":"323-0301"},{"name":"Guinea Grass Health Center","latlng":{"lat":17.95924,"lng":-88.589326}},{"name":"Northern Regional Hospital","latlng":{"lat":18.093863,"lng":-88.56216},"contactNum":"302-2072","contactEmail":"nrhinfo@wearenorthern.org","website":"https://wearenorthern.org/"},{"name":"San Felipe Health Center","latlng":{"lat":17.873637,"lng":-88.772206}},{"name":"Hopkins Satellite Clinic","latlng":{"lat":16.863396,"lng":-88.284199},"contactNum":"+501 553-7054"},{"name":"Independence Polyclinic","latlng":{"lat":16.532656,"lng":-88.41492},"contactNum":"+501 523-2167"},{"name":"Placencia Clinic","latlng":{"lat":16.515346,"lng":-88.367152},"contactNum":"622-7648","contactEmail":"arcaballero@aol.com"},{"name":"Pomona Satellite Clinic","latlng":{"lat":16.991393,"lng":-88.38569},"contactNum":"+501 522-3507"},{"name":"Southern Regional Hospital","latlng":{"lat":16.963184,"lng":-88.238016},"contactNum":"522-3834","address":"Hummingbird Hwy, Dangriga"},{"name":"St. Beight Health Center","latlng":{"lat":16.566514,"lng":-88.364406},"contactNum":"523-3328"},{"name":"Big Falls Satellite Clinic","latlng":{"lat":16.263903,"lng":-88.884931},"contactNum":"+501 724-4777"},{"name":"Pueblo Viejo Satellite Clinic","latlng":{"lat":16.205641,"lng":-89.140669}},{"name":"Punta Gorda Community Hospital","latlng":{"lat":16.092908,"lng":-88.809075},"contactNum":"722-2145"},{"name":"Santa Ana Health Center","latlng":{"lat":16.10721,"lng":-88.956188}},{"name":"Santa Teresa Satellite Clinic","latlng":{"lat":16.135481,"lng":-89.053737}}]

mongoose.connect(
  "mongodb+srv://root:SwwyBdV8sPVCz4bx@cluster0.xpjam.mongodb.net/clinics?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("DB Connected.");
});

// place SCHEMA
const placeSchema = new mongoose.Schema({
  name: String,
  latlng: { lat: Number, lng: Number },
  contactNum: String,
  contactEmail: String,
  website: String,
  address: String,
  type: Number,
});

const Place = mongoose.model("Place", placeSchema);

// seed.forEach((val, i) => {
// 	val.type = 1;
// 	Place.create(val, (err, place) => {
// 		if(err) {
// 			console.log(err)
// 		} else {
// 			console.log(i)
// 		}
// 	})

// })

loc = ["60fb0fff32a9164a68c56807", "60fb0fff32a9164a68c56806", "60fb0fff32a9164a68c56805", "60fb0fff32a9164a68c56804", "60fb0fff32a9164a68c56803", "60fb0fff32a9164a68c56802", "60fb0fff32a9164a68c56801", "60fb0fff32a9164a68c56800", "60fb0fff32a9164a68c567fe", "60fb0fff32a9164a68c567ff", "60fb0fff32a9164a68c567fd", "60fb0fff32a9164a68c567fc", "60fb0fff32a9164a68c567fb", "60fb0fff32a9164a68c567fa", "60fb0fff32a9164a68c567f9", "60fb0fff32a9164a68c567f8", "60fb0fff32a9164a68c567f7", "60fb0fff32a9164a68c567f6", "60fb0fff32a9164a68c567f5", "60fb0fff32a9164a68c567f1", "60fb0fff32a9164a68c567f4", "60fb0fff32a9164a68c567f2", "60fb0fff32a9164a68c567f3", "60fb0fff32a9164a68c567f0", "60fb0fff32a9164a68c567ef", "60fb0fff32a9164a68c567ee", "60fb0fff32a9164a68c567ed", "60fb0fff32a9164a68c567ec", "60fb0fff32a9164a68c567eb", "60fb0fff32a9164a68c567ea", "60fb0fff32a9164a68c567e9", "60fb0fff32a9164a68c567e8", "60fb0fff32a9164a68c567e7", "60fb0fff32a9164a68c567e6", "60fb0fff32a9164a68c567e5", "60fb0fff32a9164a68c567e4"]

// Vaccinated SCHEMA
const vaccineTimeSchema = new mongoose.Schema({
  taken: Date,
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' }

});

const VaccineTime = mongoose.model("VaccineTime", vaccineTimeSchema);




//Start of july 23rd 1627048800000
//End of july 23rd 1627081200000
// loc.forEach((val, i) => {
// 	for (var k = 100 - 1; k >= 0; k--) {
// 		ms = 1626703200000 + Math.floor(Math.random() * 32400000)
// 		let x = {
// 			taken: new Date(ms),
// 			location: val
// 		}
// 		VaccineTime.create(x, (err, place) => {
// 			if(err) {
// 				console.log(err)
// 			} else {
				
// 			}
// 		})
// 	}q
// 	if(i == loc.length - 1) {
// 		console.log("Done")
// 	}
// })

app.use("/static", express.static("node_modules/bootstrap/dist"));
app.use("/static", express.static("node_modules/leaflet/dist"));
app.use("/static", express.static("public"));
// app.use("/static", express.static("node_modules/fontawesome-free"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/clinics", function (req, res) {
  Place.find({}, function (err, allPlaces) {
    if (err) {
      console.log(err);
    } else {
      res.render("clinics", { places: allPlaces });
    }
  });
});

app.get("/clinic/:id", function (req, res) {
  Place.findOne({ _id: req.params.id }, function (err, place) {
    if (err) {
      console.log(err);
    } else {
      if (place.length) {
        res.redirect("/clinics")
      } else {
      		var days = 8; // Days you want to subtract
			var date = new Date();
			var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
		  	VaccineTime.find({ location: req.params.id, taken: { $gt:last } }, function (err, allTime) {
			    if (err) {
			      console.log(err);
			    } else {
			    	let split = [
			    	[0,0,0,0,0],
			    	[0,0,0,0,0],
			    	[0,0,0,0,0],
			    	[0,0,0,0,0],
			    	[0,0,0,0,0],
			    	[0,0,0,0,0],
			    	[0,0,0,0,0],
			    	[0,0,0,0,0],
			    	[0,0,0,0,0]]
			  		allTime.forEach((val, ind) => {
			  			split[parseInt(val.taken.getHours() - 8)][parseInt(val.taken.getDay() - 1)]++;

			  			if(ind === allTime.length - 1){
      						res.render("clinic", {place: place, times: split})
			  			}
			  		})
			    }
		    });
      }
    }
  });
});

app.get("/heatmap", function (req, res) {
  res.render("heatmap");
});

app.get("/schedule/:id", function (req, res) {
	var days = 8; // Days you want to subtract
	var date = new Date();
	var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
  	VaccineTime.find({ location: req.params.id, taken: { $gt:last } }, function (err, allTime) {
	    if (err) {
	      console.log(err);
	    } else {
	    	let split = [
	    	[0,0,0,0,0],
	    	[0,0,0,0,0],
	    	[0,0,0,0,0],
	    	[0,0,0,0,0],
	    	[0,0,0,0,0],
	    	[0,0,0,0,0],
	    	[0,0,0,0,0],
	    	[0,0,0,0,0],
	    	[0,0,0,0,0]]
	  		allTime.forEach((val, ind) => {
	  			split[parseInt(val.taken.getHours() - 8)][parseInt(val.taken.getDay() - 1)]++;

	  			if(ind === allTime.length - 1){
	    			res.render("schedule", {times: split})
	  			}
	  		})
	    }
    });
});

app.get("/district", function (req, res) {
  res.render("district");
});

app.get("/:id", function (req, res) {
  res.send(req.params.id);
});

app.listen(3000, function () {
  console.log("Server is running at port 3000.");
});
