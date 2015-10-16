
//forEach
var a = ["a", "b", "c"];
	console.log(a);
a.forEach(function(entry) {
    console.log(entry);
});



//reverse
var arr = new Array(0,1,2,3,4); 
var reverseArr = arr.reverse();
document.write(reverseArr);


// The callback function.
function CheckIfEven(value, index, ar) {
    if (value % 2 == 0)
        return true;
}	

var numbers = [1, 15, 1, 1, 11, 21];

var evens = numbers.some(CheckIfEven);
document.write(evens);

// valueOf
var arr = [1, 2, 3, 4];
var s = arr.valueOf();

if (arr === s)
document.write("same");
else
document.write("different");

// Output:
// same



// Output:
// true



/*
var quarter = .25;
var dime = .1;
var nickel = .05;
var penny =.01;

var change = .67;
var coinPurse = {};


function alpha () {
	//Pulling out the quarters!
	var changeLeftover = change % quarter;
	coinPurse.quarter = (change - changeLeftover)/quarter; //.67-.17/quarter
	//Pulling out the dimes!
	var notDime = (changeLeftover/dime);
	//	ROUNDING!
	coinPurse.dime=Math.floor(notDime);
	//On to Nickels!
	changeLeftover = changeLeftover % dime;
	var notNickel = (changeLeftover/nickel);
	//	ROUNDING!
	coinPurse.nickel=Math.floor(notNickel);
	//On to Pennies!
	changeLeftover = changeLeftover % nickel; 
	var notPenny = (changeLeftover/penny);
	//	ROUNDING!
	coinPurse.penny=Math.floor(notPenny);

	return coinPurse.quarter;
}
alpha(); //RUN IT!
console.log(coinPurse);
*/