/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

/*

function reversal(test) {
	var testout = test.split("").reverse().join("");
	document.write(testout);
	console.log(testout);

	return testout;
}

var stringy = reversal("here's a string!");
console.log(stringy);


var testString = "ABCDEFQ";

reversal(testString);



function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString); 
*/

/*
function alphabits(origString) {
  document.write("<div>" + origString.split("").sort().join("") + "</div>");
}

function palindrome(origString) {
  var newString = origString.replace(/[\s,]/g, "").toLowerCase();
  var reversedNewString = reversal(newString);

  if (newString === reversedNewString) {
    document.write("<div>\"" + origString + "\" is a palidrome</div>");
    
  } else {
    document.write("<div>\"" + origString + "\" is not a palindrome</div>");
    
  }
}
*/


/*var Car = {
	make: "Nissan",
	wheels: 4,
	model: "Xterra",
	options: {
		ac: true,
		bulletproof: false,
		underlighting: false,
		spinners: true
	}
};
console.log(Car.options.spinners);
*/

function add(Bill, Ted) {
console.log(Bill, Ted);

return Bill + Ted;

}
function subtract() {one, two};{
	return one - two;
}


add(1, subtract);










