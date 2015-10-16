var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boybands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

var outputband = "";
var outputveggies = "";

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
 var currentBand = bands[loopTracker];
 var currentVeggie = vegetables[loopTracker];

  outputband = outputband + "<div>" + currentBand + "</div>";
  outputveggies = outputveggies + "<div>" + currentVeggie + "</div>";
  // Add the veggie names into the correct <div>
 

}

console.log(outputband);
console.log(outputveggies);
bandElement.innerHTML = outputband;

//Loop through the two arrays provided and output each element in the arrays 
//into their corresponding HTML <div> element. Ensure that each item is in 
//a block element (e.g. li, div, p. etc...)