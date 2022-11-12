function diagonalDifference(arr) {
  // Write your code here

  const sumA = arr[0][0] + arr[1][1] + arr[2][2];
  const sumB = arr[0][2] + arr[1][1] + arr[2][0];

  return Math.abs(sumA - sumB);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
