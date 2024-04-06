// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example

// There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted
// Returns

// int: the lowest type id of the most frequently sighted birds
// Input Format

// The first line contains an integer, , the size of .
// The second line describes  as  space-separated integers, each a type number of the bird sighted.

function migratoryBirds(arr) {
  const frequency = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  let maxFreq = 0;
  let mostFrequentItem = arr[0];

  Object.entries(frequency).forEach(([item, freq]) => {
    if (
      freq > maxFreq ||
      (freq === maxFreq && parseInt(item) < mostFrequentItem)
    ) {
      mostFrequentItem = parseInt(item);
      maxFreq = freq;
    }
  });

  return mostFrequentItem;
}

migratoryBirds([1, 1, 2, 2, 3]);
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
