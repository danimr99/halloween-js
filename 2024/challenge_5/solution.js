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
  const n = room.length;
  const m = room[0].length;
  let start = null;
  let target = null;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (room[i][j] === "▲") {
        start = [i, j];
      } else if (room[i][j] === "T") {
        target = [i, j];
      }
    }
  }

  const visited = new Set(`${start[0]},${start[1]}`);
  const queue = [{ x: start[0], y: start[1], steps: 0 }];
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const { x, y, steps } = queue.shift();

    if (x === target[0] && y === target[1]) return steps;
    visited.add(`${x},${y}`);

    for (const [dx, dy] of directions) {
      const newx = x + dx;
      const newy = y + dy;

      if (
        newx >= 0 &&
        newx < n &&
        newy >= 0 &&
        newy < m &&
        !visited.has(`${newx},${newy}`)
      ) {
        if (room[newx][newy] !== "#") {
          queue.push({ x: newx, y: newy, steps: steps + 1 });
        }
      }
    }
  }

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
