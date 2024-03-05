/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const beginningHouse = s;
  const endingHouse = t;
  const appleTreeLocation = a;
  const orangeTreeLocation = b;
  const finalApplesDistance = apples.map((apple) => apple + appleTreeLocation);
  const finalOrangessDistance = oranges.map(
    (orange) => orange + orangeTreeLocation
  );

  const applesInRange = finalApplesDistance.filter(
    (apple) => apple >= beginningHouse && apple <= endingHouse
  ).length;
  const orangesInRange = finalOrangessDistance.filter(
    (orange) => orange >= beginningHouse && orange <= endingHouse
  ).length;
  console.log(`${applesInRange} apples in range`);
  console.log(`${orangesInRange} oranges in range`);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
