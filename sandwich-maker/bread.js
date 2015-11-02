var Sandwich = (function (origObject) {

	var breadlist = {
		"white": 1.00,
		"wheat": 2.00
	};

// Create an unnamed function, with the argument breadInStack. 
	origObject.putIntoBreadStack = function (breadName) {
		return breadlist[breadName];

	};

	return origObject;

})(Sandwich || {});