// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, arr) {
  const uniqueValues = [...new Set(arr)];
  let count = 0;

  uniqueValues.forEach((value) => {
    const filterValues = arr.filter((element) => element == value);
    const pairsNumber = Math.floor(filterValues.length / 2);
    count += pairsNumber;
  });

  return count;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
sockMerchant(9, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
