
$(document).ready(function() {

	var totalPrice = 0;


//The BUTTON!
	$("#button").click(function() {
		var ingredients = $("input:checked");

//Loop through the available ingredients using .each - declare index i and element ingredient.
			ingredients.each(function(i, ingredient){

// Check the className to filter the ingredients for meat
			if (ingredient.className === "meat"){

// When thinking of the totalPrice --> Do the putIntoMeatStack method that is on Sandwich, using the value of ingredient (as long as that ingredient is meat).
				totalPrice += Sandwich.putIntoMeatStack($(ingredient).val());
				console.log("total", totalPrice);
			};

			if (ingredient.className === "bread"){
				totalPrice += Sandwich.putIntoBreadStack($(ingredient).val());
				console.log("total", totalPrice);
			};

		})
	});

});

