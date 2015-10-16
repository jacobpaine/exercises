var planets = ["mercury", "venus", "earth", "mars", "jupiter"]

var criteria = 1

for (var i = 0; i < planets.length; i++){
	var planet = planets[i]
}

switch(planet) {
	case "mercury":
	case "venus":
	case "earth":
		console.log("rocky");
	break;
	case "jupiter":
	case "saturn":
		console.log("gas");
	default:
	console.log("whatever");
	break;
	}
}




