'use strict';
function createArray() {
  var createArray = ["snickers", "hundred grand"
   "kitkat", "skittles"];
  return createArray;
}

function addElementToArray(){
  addElementToArray.push("A Christmas Story");
  return addElementToArray;
}

function accessThirdElementFromArray(){
  var states = ["Michigan", "Ohio", "Illinois", "Indiana"];
  return(states[3]);
}

function replaceElementInArray(){
  var names = ["Carrick", "Cady", "Callie"];
  names [2] = "Carter";
  return var names;
}

function removeElementFromArray(){
  var dishes = ["Salad", "Casserole", "Pasta", "Chili", "Burger"];
  var removedDishes = dishes.splice(2, 2, 'Roast Chicken')
  return removeElementFromArray;
}

function iterateArray(){
  var numbers = ["1", "2", "3", "4", "5"];
  var newNums = new Array();
    numbers.forEach(function(addition, index) {
    var newNums = (numbers + 5);
    return newNums;
  }

}

