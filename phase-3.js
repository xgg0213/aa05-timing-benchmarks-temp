const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here 
    // Fill this in
    let res = [];
    let index = 1;
    let newIncrement = increment;
  
    while (index <= 10) {
      const startTime = Date.now();
      let sum = addNums(newIncrement);
      res.push(sum);
      const endTime = Date.now();
      index++;
      newIncrement+=increment;
      console.log(endTime - startTime)
    }
    // the endTime - startTime depends on the complexity of the actual function: in this case addNums(n)
    // goal is to apply big-o to data structures (week 9) and sorting algo in general: to determine algo complexity
    // expectation for this week: solve a problem without using efficient logic (bound the function run time etc.)
    // benefits of below is that the time is more accurate
    // Date.now() provides the convenience of exporting the lapsed time
  console.time("addNums10");     // starts the timer
  console.timeLog("addNums10");  // only generates where the timer currently is
  console.timeEnd("addNums10");  // stops the timer

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here 

  function addManyNums10(increment) {
    // Fill this in
    let res = [];
    let index = 1;
    let newIncrement = increment;
  
    while (index <= 10) {
      res.push(addManyNums(newIncrement));
      index++;
      newIncrement+=increment;
    }
    return res;
    
  }

  // console.time("addManyNums10");
  // console.timeLog("addManyNums10");  
  // console.timeEnd("addManyNums10");  

}


n = 1000000  // question: why each runtime is different with the same n and same code?
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
