/**
 * Create a magic potion using two potions that sum the target power.
 *
 * @function createMagicPotion
 * @param {number[]} potions - List of power of each potion
 * @param {number} target - Goal power
 * @returns {number[] | undefined} Indexes of the two potions that sum the target power
 */
function createMagicPotion(potions, target) {
  let bestMatch;

  for (let firstPotion = 0; firstPotion < potions.length; firstPotion++) {
    for (
      let secondPotion = firstPotion + 1;
      secondPotion < potions.length;
      secondPotion++
    ) {
      if (potions[firstPotion] + potions[secondPotion] === target) {
        if (!bestMatch || secondPotion < bestMatch[1]) {
          bestMatch = [firstPotion, secondPotion];
        }
      }
    }
  }

  return bestMatch;
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
