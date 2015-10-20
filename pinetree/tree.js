/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********
*/
/*function tree(number) {
    
    var count = 1;
    var spaceCount = number - 1;
//    var christmas = document.getElementById("pinetree");

    //Number of rows
    for (var i = 0; i < number; i++) {
        //Set row variable
        var row = "";

        //Print each row's spaces
        for (var k = 0; k < spaceCount; k++) {
            var row = row + (" ");
        }

        //Print each row's stars
        for (var j = 0; j < count; j++) {
            var row = row + ("*");
        }

        count = count + 2;
        spaceCount = spaceCount - 1;
        console.log(row);
//     christmas.innerHTML = christmas.innerHTML + row + "<br/>";
    }
}
tree(3);*/


function tree(number) {

var starCount = 1;
var spaceCount = number -1;

for (var i = 0; i < number; i++){
    var row = "";
  console.log(row); 
  for (var k = 0; k <spaceCount;k++){
    var row = row + (" ");
    }
  console.log(row); 
  for (var j = 0; j<starCount; j++){
    var row = row + ("*");
    }
  console.log(row); 
starCount = starCount + 2;
spaceCount = spaceCount - 1;
console.log(row);

  }
}
tree(3);



