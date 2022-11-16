/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example

There are  instances of '',  of '' and  of ''. For each query, add an element to the return array, .

Function Description

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in stringList.

matchingStrings has the following parameters:

string stringList[n] - an array of strings to search
string queries[q] - an array of query strings
Returns

int[q]: an array of results for each query
Input Format

The first line contains and integer , the size of .
Each of the next  lines contains a string .
The next line contains , the size of .
Each of the next  lines contains a string .

Sample Input 1

CopyDownload
Array: stringList
aba
baba
aba
xzxb

Array: queries
aba
xzxb
ab

Sample Output 1
2
1
0

Sample Input 2

CopyDownload
Array: stringList
def
de
fgh

Array: queries
de
lmn
fgh

Sample Output 2
1
0
1

*/

function matchingStrings(stringList, queries) {
  // Write your code here
  let counterArray = [];

  queries.forEach((query, index) => {
    let count = 0;

    stringList.forEach((element) => {
      if (query === element) {
        count += 1;
      }
    });

    counterArray[index] = count;
  });

  return counterArray;
}

// matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']);
matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']);
