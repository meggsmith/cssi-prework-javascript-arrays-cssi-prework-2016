'use strict';
function createArray() {
  var snacks = ["snickers", "hundred grand",
   "kitkat", "skittles"];
  return snacks;
}

function addElementToArray(myArray){
  myArray.push("A Christmas Story");
  return myArray;
}

function accessElementFromArray(myArray){
  return(myArray[2]);
}

function replaceElementInArray(myArray){
  myArray[1] = "Carter";
  return myArray;
}

function removeElementFromArray(myArray){
  myArray.splice(2, 3, 'Roast Chicken');
  return myArray;
}

function iterateArray(myArray){ // <--creating a new function that accepts an array of numbers as a parameter
    var newNums = []; //<--using the 'construct array' method to store an empty array in the newNums variable
    myArray.forEach(function(originalNumber)){ //<--iterating on each number in 'myArray', adding second function to tell it we are doing addition and to keep track of the place
      newNums.push(originalNumber + 5);
    }//adding 5 to each number in 'myArray', storing the added numbers to the new array newNums
    return newNums; //retun new array with larger numbers
  }



