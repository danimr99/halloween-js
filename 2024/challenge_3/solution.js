/**
 * Given a 2D array of integers, find the safest path sum.
 * You can only move down or right.
 *
 * Example:
 *
 * Input:
 * [
 *  [1, 3, 1],
 *  [1, 5, 1],
 *  [4, 2, 1],
 * ]
 *
 * Output: 7
 *
 * @function findSafestPath
 * @param {array<array<number>>} dream - 2D array of integers
 * @returns {number} The safest path sum
 */
function findSafestPath(dream) {
  const rows = dream.length;
  const columns = dream[0].length;
  const pathTracker = new Array(rows)
    .fill(0)
    .map(() => new Array(columns).fill(0));

  pathTracker[0][0] = dream[0][0];

  for (let row = 1; row < rows; row++) {
    pathTracker[row][0] = pathTracker[row - 1][0] + dream[row][0];
  }

  for (let column = 1; column < columns; column++) {
    pathTracker[0][column] = pathTracker[0][column - 1] + dream[0][column];
  }

  for (let row = 1; row < rows; row++) {
    for (let column = 1; column < columns; column++) {
      pathTracker[row][column] =
        Math.min(pathTracker[row - 1][column], pathTracker[row][column - 1]) +
        dream[row][column];
    }
  }

  return pathTracker[rows - 1][columns - 1];
}

// Test A
const dreamA = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(findSafestPath(dreamA)); // 1 -> 3 -> 1 -> 1 -> 1 = 7
