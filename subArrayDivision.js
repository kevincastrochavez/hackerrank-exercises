/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  // Write your code here
  const chocolateArray = s;
  const day = d;
  const month = m;
  let counter = 0;

  for (let i = 0; i <= chocolateArray.length - month; i++) {
    let total = 0;
    for (let j = i; j < i + month; j++) {
      total += chocolateArray[j];
    }
    if (total === day) {
      counter++;
    }
  }

  return counter;
}

birthday([2, 2, 1, 3, 2], 4, 2);
