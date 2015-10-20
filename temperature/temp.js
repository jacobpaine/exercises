/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted temperature.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/
var tempPrint = document.getElementById("tempBlock");


function enterPress(){
  document.getElementById("tempInput")
  .addEventListener("keypress", determineConverter);
}

function eraseText() {
    document.getElementById("tempInput").value = "";
}

function toCelsius () {
  var tempInput = document.getElementById("tempInput").value;
  tempC = (tempInput - 32) * 5/9;
  document.getElementById("tempBlock").innerHTML = tempC;
      if (tempC>32){
      document.getElementById("tempBlock").style.backgroundColor = "red";
    } else if (tempC<0){
      document.getElementById("tempBlock").style.backgroundColor = "blue";
    } else {
      document.getElementById("tempBlock").style.backgroundColor = "green";
    }
}

function toFahrenheit () {
  var tempInput = document.getElementById("tempInput").value;
  tempF = (tempInput * 9/5) + 32;
  document.getElementById("tempBlock").innerHTML = tempF;
    if (tempF > 92) {
      document.getElementById("tempBlock").style.backgroundColor = "red";
    } else if (tempF < 32) {
      document.getElementById("tempBlock").style.backgroundColor = "blue";
    } else {
      document.getElementById("tempBlock").style.backgroundColor = "green";
    }
}


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  var celsiusbutton = document.getElementById('celsiusbutton')
  var fahrenheitbutton = document.getElementById('fahrenheitbutton')

    
      if (celsiusbutton.checked) {
        toCelsius();
      }
      
      if (fahrenheitbutton.checked) {
        toFahrenheit();
      }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);









