const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
// O(10 * n)
function addNums10(increment) {
  // Fill this in
  let res = [];
  let index = 1;
  let newIncrement = increment;

  while (index <= 10) {
    res.push(addNums(newIncrement)); // O(n)
    index++;
    newIncrement+=increment;
  }
  return res;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let res = [];
  let index = 1;
  let newIncrement = increment;

  while (index <= 10) {
    res.push(addManyNums(newIncrement)); // O(n^2)
    index++;
    newIncrement+=increment;
  }
  return res;
  
}

module.exports = [addNums10, addManyNums10];
