// Recall that the middle truncated makes this JS look like this:
// var Sandwich = (function(origObject) {TRUNCATED}(Sandwich || {}))
// So ignore the truncated part at first, and notice the end. This statement says
// we either run Sandwich or an empty object. This makes the object self-initializing.

//

var Sandwich = (function (origObject) {

	var meatlist = {
		"spam": 1.00,
		"goose": 2.00
	};

// Create an unnamed function, with the argument meatInStack. 
	origObject.putIntoMeatStack = function(meatName) {
		return meatlist[meatName];

	};

	return origObject;

})(Sandwich || {});

//		console.log("putIntoMeatStack runs", meatInStack);


//	Look through all the stacked Meat and give them each a number.

		// for (var i = 0; i < meatInStack.length; i++){

//	Now that each Meat has a number, make a variable to talk about the price of one Meat at a time.	
			// var priceOfMeat = meatInStack[i];

// Now let's make a place for the meat to go.
			// var meatInBag = "";
			// console.log("meatInBag0", meatInBag);

// Put Meat in the bag. 
		// 	meatInBag += meatList[priceOfMeat]
		// 	console.log("meatInBag1", meatInBag);
		// 	}
		// console.log("meatInBag2", meatInBag);

		// return meatInBag;

		// console.log("meatInBag3", meatInBag);

