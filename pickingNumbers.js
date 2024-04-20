// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

// Example

// There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

// Function Description

// Complete the pickingNumbers function in the editor below.

// pickingNumbers has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the length of the longest subarray that meets the criterion

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  let max = 0;
  let len = a.length;
  for (let i = 0; i < len; i++) {
    let count = 1;
    for (let j = 0; j < len; j++) {
      if (i !== j && (a[i] === a[j] || a[i] === a[j] - 1)) {
        count++;
      }
    }
    max = Math.max(max, count);
  }

  return max;
}

pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);
