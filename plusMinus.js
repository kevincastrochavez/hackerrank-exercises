/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Output Format
Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

Sample Output
0.500000
0.333333
0.166667
*/

function plusMinus(arr) {
  // Write your code here
  const positive = [];
  const zero = [];
  const negative = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      positive.push(arr[index]);
    }

    if (arr[index] < 0) {
      negative.push(arr[index]);
    }

    if (arr[index] === 0) {
      zero.push(arr[index]);
    }
  }

  const positiveRatio = parseFloat((positive.length / arr.length).toFixed(6));
  const negativeRatio = parseFloat((negative.length / arr.length).toFixed(6));
  const zeroRatio = parseFloat((zero.length / arr.length).toFixed(6));

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

console.log(plusMinus([1, 1, 0, -1, -1]));
