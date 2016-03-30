/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/



function Car(){
  this.Make = "Nissan";
  this.Model = "Xterra";
}

Car();

var carOne = new Car();
  carOne.color = "red";


var carTwo = new Car();
  carTwo.color = "blue";


var carThree = new Car();
  carThree.color = "green";


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function Make(){
  this.MakeName = "Nissan";
}


/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model(){
  this.property = "Sentra"
}

Car.prototype = new Object();
Model.prototype = new Make();

console.log(Car);

// What is the prototype of a Model?
Model.prototype = new Make();

// Define a Car
var Truck = function() {};

// What is the prototype of a Car?
Truck.prototype = new Model();

// Create the first car
console.log(carOne);

// Create the second car
console.log(carTwo);

// Create the third car
console.log(carThree);