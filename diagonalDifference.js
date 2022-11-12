function diagonalDifference(arr) {
  // Write your code here
  const reversedIndexes = [];
  const sumA = [];
  const sumB = [];

  for (let index = 0; index < arr.length; index++) {
    reversedIndexes.unshift(index);
  }

  for (let index = 0; index < arr.length; index++) {
    sumA.push(arr[index][index]);
    sumB.push(arr[index][reversedIndexes[index]]);
  }

  const arrayA = sumA.reduce((curr, acc) => curr + acc);
  const arrayB = sumB.reduce((curr, acc) => curr + acc);

  return Math.abs(arrayA - arrayB);
}

// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );

console.log(
  diagonalDifference([
    [6, 8],
    [-6, 9],
  ])
);
