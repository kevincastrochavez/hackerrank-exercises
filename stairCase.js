/*
Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Output Format
Print a staircase of size  using # symbols and spaces.
Note: The last line must have  spaces in it.

Sample Input
6

Sample Output

     #
    ##
   ###
  ####
 #####
######
*/

function staircase(n) {
  // Write your code here
  for (let index = 0; index < n; index++) {
    const numberOfSpaces = n - (index + 1);
    const numberOfHashtags = index + 1;

    const spacesArray = [];
    const hashtagsArray = [];

    for (let i = 0; i < numberOfSpaces; i++) {
      spacesArray.push(i + 1);
    }

    for (let i = 0; i < numberOfHashtags; i++) {
      hashtagsArray.push(i + 1);
    }

    const spacesString = spacesArray
      .map((space) => {
        return ' ';
      })
      .join('');

    const hashtagsString = hashtagsArray
      .map((hashtag) => {
        return '#';
      })
      .join('');

    console.log(`${spacesString}${hashtagsString}`);
  }
}

staircase(4);
