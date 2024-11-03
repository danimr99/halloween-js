/**
 * Create a magic potion using two potions that sum the target power.
 *
 * @function createMagicPotion
 * @param {number[]} potions - List of power of each potion
 * @param {number} target - Goal power
 * @returns {number[] | undefined} Indexes of the two potions that sum the target power
 */
function createMagicPotion(potions, target) {
  // Maps a potion power to its first appareance
  let table = new Map();

  for (let i = 0; i < potions.length; i++) {
    const complement = target - potions[i];

    if (table.has(complement)) {
      return [table.get(complement), i];
    }

    if (!table.has(potions[i])) {
      table.set(potions[i], i);
    }
  }

  return undefined;
}

// Test A
const potionsA = [4, 5, 6, 2];
const goalA = 8;

console.log(createMagicPotion(potionsA, goalA)); // [2, 3]

// Test B
const potionsB = [1, 2, 3, 4];
const goalB = 9;

console.log(createMagicPotion(potionsB, goalB)); // undefined

// Test C
const potionsC = [1, 2, 3, 4];
const goalC = 5;

console.log(createMagicPotion(potionsC, goalC)); // [1, 2]
// también podría ser [0, 3] pero hay una combinación antes
