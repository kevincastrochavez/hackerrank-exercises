function simpleArraySum(ar) {
  // Write your code here
  return ar.reduce((curr, acc) => curr + acc);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
