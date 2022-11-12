function compareTriplets(a, b) {
  const result = [0, 0];

  for (let index = 0; index < a.length; index++) {
    if (a[index] > b[index]) {
      result[0] += 1;
    }

    if (a[index] < b[index]) {
      result[1] += 1;
    }

    if (a[index] == b[index]) {
      continue;
    }
  }

  return result;
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
