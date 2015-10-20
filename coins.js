/*
 ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }
*/

/*change % quarter = changeLeftover {2} => var
	(change - changeLeftover)quarter/ = quarters
changeLeftover % dime = changeLeftover {1} => var
	(change - changeLeftover)dime/ = dimes
changeLeftover % nickel = changeLeftover {1} => var
	(change - changeLeftover)nickel/ = nickels
changeLeftover % pennies = changeLeftover {2} => var
	(change - changeLeftover)penny/ = pennies

log all variables
*/

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

/*


// Initialize a JavaScript object to hold the coins var coinPurse = {};

/*coinPurse.quarters = 0; 

return coinPurse; }

var coins = coinCounter() console.log();


*/