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
  const cols = dream[0].length;

  let currentRow = new Array(cols).fill(Infinity);

  // The first row is a base case: we can't get to those cells moving down
  currentRow[0] = dream[0][0];

  for (let j = 1; j < cols; j++) {
    currentRow[j] = dream[0][j] + currentRow[j - 1];
  }

  for (let i = 1; i < rows; i++) {
    // Border cells can only be reached moving down from previous row
    currentRow[0] += dream[i][0];
    for (let j = 1; j < cols; j++) {
      // This value doesn't change yet because of the invariant
      const topCell = currentRow[j];
      // This is already updated for the current row
      const leftCell = currentRow[j - 1];
      // Check the best way to reach the current cell: moving down or right
      currentRow[j] = dream[i][j] + Math.min(topCell, leftCell);
    }
  }

  return currentRow[cols - 1];
}

// Test A
const dreamA = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(findSafestPath(dreamA)); // 1 -> 3 -> 1 -> 1 -> 1 = 7
