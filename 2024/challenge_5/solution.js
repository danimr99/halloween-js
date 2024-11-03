/**
 * Determines the number of steps it takes to Pyramid Head to reach you.
 *
 * Instructions:
 * Pyramid Head can only move up, down, left, and right.
 * Pyramid Head cannot move through walls.
 * Pyramid Head cannot move diagonally.
 * Pyramid Head takes the shortest path to reach you.
 *
 * @function escapePyramidHead
 * @param {array<array<string>>} room - a 2D array of strings representing the room.
 * @returns {number} The number of steps it takes to Pyramid Head to reach you.
 */
function escapePyramidHead(room) {
  // Find the location of Pyramid Head and the player
  let pyramidHeadPosition = null;
  let playerPosition = null;

  for (let row = 0; row < room.length; row++) {
    for (let column = 0; column < room[row].length; column++) {
      if (room[row][column] === "▲") {
        pyramidHeadPosition = [row, column];
      } else if (room[row][column] === "T") {
        playerPosition = [row, column];
      }
    }
  }

  // If either Pyramid Head or the player is not in the room, return -1
  if (!pyramidHeadPosition || !playerPosition) {
    return -1;
  }

  // Create a queue to keep track of the possible paths
  const queue = [[pyramidHeadPosition, 0]];
  const visited = new Set();
  visited.add(pyramidHeadPosition.join(","));

  // Define the directions Pyramid Head can move
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  // While there are still paths to explore
  while (queue.length) {
    const [currentPosition, steps] = queue.shift();

    // If Pyramid Head reaches the player, return the number of steps
    if (
      currentPosition[0] === playerPosition[0] &&
      currentPosition[1] === playerPosition[1]
    ) {
      return steps;
    }

    // Explore the possible paths
    for (const direction of directions) {
      const [rowOffset, colOffset] = direction;
      const newRow = currentPosition[0] + rowOffset;
      const newColumn = currentPosition[1] + colOffset;

      // If the new position is within the room and not a wall
      if (
        newRow >= 0 &&
        newRow < room.length &&
        newColumn >= 0 &&
        newColumn < room[0].length &&
        room[newRow][newColumn] !== "#"
      ) {
        const newPosition = [newRow, newColumn];
        const newPositionStr = newPosition.join(",");

        // If the new position has not been visited
        if (!visited.has(newPositionStr)) {
          queue.push([newPosition, steps + 1]);
          visited.add(newPositionStr);
        }
      }
    }
  }

  // If Pyramid Head cannot reach the player, return -1
  return -1;
}

// Test A
const roomA = [
  [".", ".", "#", ".", "▲"],
  ["#", ".", "#", ".", "#"],
  [".", ".", ".", ".", "."],
  ["#", "#", "#", ".", "#"],
  ["T", ".", ".", ".", "."],
];

console.log(escapePyramidHead(roomA)); // -> 8

// Test B
const roomB = [
  ["T", ".", "#", "."],
  [".", ".", ".", "."],
  ["▲", ".", ".", "#"],
  [".", "#", "#", "#"],
];

console.log(escapePyramidHead(roomB)); // -> 2

// Test C
const roomC = [
  ["#", "#", "#"],
  ["▲", ".", "#"],
  [".", "#", "T"],
];

console.log(escapePyramidHead(roomC)); // -> -1
