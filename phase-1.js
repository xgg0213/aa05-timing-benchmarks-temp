// Adds up positive integers from 1-n
// O(n)
function addNums(n) {
  // Fill this in
  let res = 0;
  for (let i = 1; i <=n; i++) {
    res += i;
  }

  return res;
}


// Adds up values of addNums(1) through addNums(n)
// O(n^2)
function addManyNums(n) {
  // Fill this in
  let res = 0;
  for (let i = 1; i <=n; i++) {
    res += addNums(i);
  }
  return res;

}



module.exports = [addNums, addManyNums];