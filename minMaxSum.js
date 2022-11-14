/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format
A single line of five space-separated integers.

Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input
1 2 3 4 5

Sample Output
10 14
*/

function miniMaxSum(arr) {
  // Write your code here
  const arrayOfSums = [];

  for (let index = 0; index < arr.length; index++) {
    const copiedArray = [...arr];
    copiedArray.splice(index, 1);

    const numbersSum = copiedArray.reduce((curr, acc) => curr + acc);
    arrayOfSums.push(numbersSum);
  }

  const minNumber = Math.min(...arrayOfSums);
  const maxNumber = Math.max(...arrayOfSums);

  console.log(`${minNumber} ${maxNumber}`);
}

// miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([1, 3, 5, 7, 9]);
