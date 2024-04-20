function parseLineString(lineString) {
  return lineString
    .replace('LINESTRING(', '')
    .replace(')', '')
    .split(',')
    .map((coord) => coord.trim().split(' ').map(Number));
}

// Calculate the center by adding all the coordinates and dividing by the number of coordinates
function computeCentroid(coordinates) {
  const centerX =
    coordinates.reduce((sum, [coordX]) => sum + coordX, 0) / coordinates.length;
  const centerY =
    coordinates.reduce((sum, [_, coordY]) => sum + coordY, 0) /
    coordinates.length;

  return { centerX, centerY };
}

// function rotatePoint90DegreesClockwise(x, y, centerX, centerY, angle) {
//   const angleRadians = angleDegrees * Math.PI / 180;

//   const newX =
//     centerX +
//     ((x - centerX) * Math.cos(angle) - (y - centerY) * Math.sin(angle));
//   const newY =
//     centerY +
//     ((x - centerX) * Math.sin(angle) + (y - centerY) * Math.cos(angle));

//   return [newX, newY];
// }

function rotateLineString90Clockwise(lineString, angle) {
  const coordinates = parseLineString(lineString);

  const { centerX, centerY } = computeCentroid(coordinates);

  const radians = (Math.PI / 180) * angle;

  const rotatedVertices = coordinates.map(([x, y]) => {
    // 𝑋′=𝑋𝐶+cos𝜃(𝑋−𝑋𝐶)−sin𝜃(𝑌−𝑌𝐶)
    // 𝑌′=𝑌𝐶+sin𝜃(𝑋−𝑋𝐶)+cos𝜃(𝑌−𝑌𝐶)

    const xNew =
      centerX +
      Math.cos(radians) * (x - centerX) -
      Math.sin(radians) * (y - centerY);

    const yNew =
      centerY +
      Math.sin(radians) * (x - centerX) +
      Math.cos(radians) * (y - centerY);

    return [xNew, yNew];
  });

  // Format the new lineString
  const rotatedLineString =
    'LINESTRING(' +
    rotatedVertices.map((coord) => `${coord[0]} ${coord[1]}`).join(',') +
    ')';

  console.log(rotatedLineString);
  // return rotatedLineString;
}

// function convertLineStringToObj(lineString) {
//   const rotatedShapeObj = {
//     data: [[coordinates, 'Lines']],
//     columns: [{ name: 'geom' }, { name: 'name' }],
//   };

//   console.log(rotatedShapeObj);
//   return rotatedShapeObj;
// }

// Example usage
const originalLineString =
  'LINESTRING(-113.994140625 42.00032514831619,-111.09375000000001 41.96765920367815,-111.04980468750001 41.07935114946898,-109.07226562500001 41.04621681452065,-109.0283203125 37.020098201368114,-113.994140625 37.020098201368114,-113.994140625 41.934976500546554)';
const rotatedLineString = rotateLineString90Clockwise(originalLineString, -270);
// const rotatedShape = convertLineStringToObj(rotatedLineString);
