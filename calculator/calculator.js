var x = document.getElementById("first");
var y = document.getElementById("second");

console.log(x)
document.getElementById("add").addEventListener("click", function(){
   var x2 = parseInt(x.value);
   var y2 = parseInt(y.value);

    console.log(x2);
    console.log(y2);

    var sum = add(x2, y2);
    console.log(sum);
});

document.getElementById("subtract").addEventListener("click", function(){
	firstNum = parseInt(x.value);
    secondNum = parseInt(y.value);

    var diff = subtract(firstNum, secondNum);
    console.log(diff);
});

document.getElementById("multiply").addEventListener("click", function(){
	firstNum = parseInt(x.value);
    secondNum = parseInt(y.value);


    var prod = multiply(firstNum, secondNum);
    console.log(prod);


});


document.getElementById("divide").addEventListener("click", function(){
	firstNum = parseInt(x.value);
    secondNum = parseInt(y.value);


    var quo = divide(firstNum, secondNum);
    console.log(quo);
});


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiply (one, two){
	return one * two;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add (one, two){
	return one + two;
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

function subtract (one, two){
	return one - two;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide (one, two){
	return one / two;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function operate(first, second, perform){
	perform(first, second);
}








