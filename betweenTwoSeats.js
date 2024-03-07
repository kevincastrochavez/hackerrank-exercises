/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  const firstArray = a;
  const secondArray = b;

  let total = 0;
  for (let i = 1; i <= 100; i++) {
    if (
      firstArray.every((number) => i % number === 0) &&
      secondArray.every((number) => number % i === 0)
    ) {
      total++;
    }
  }

  console.log(total);
  return total;
}

getTotalX([2, 6], [24, 36]);
