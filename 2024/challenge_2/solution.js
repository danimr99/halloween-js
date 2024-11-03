/**
 * Battles the horde of zombies against the humans.
 *
 * The function should take two arguments:
 * - zombies: A string representing the power of zombies.
 * - humans: A string representing the power of humans.
 *
 * The power of zombies and humans is represented by a string of integers.
 * Each digit represents the power of a zombie or human.
 * The power of a zombie or human is a positive integer.
 *
 * The battle will happen between the zombies and humans.
 *
 * The battle will happen in the following way:
 * - The battle will happen in rounds.
 * - In each round, the zombies and humans will fight.
 * - The power of the zombies and humans will be compared.
 * - The power of the zombies and humans will be compared from left to right.
 * - The zombie or human with the higher power will win the round.
 * - The losing zombie or human will be eliminated.
 * - If the power of the zombies and humans is equal, both will be eliminated.
 * - The difference in power of the winner will be added to the following character.
 * - The battle will continue until all the zombies or humans are eliminated.
 * - The last zombie or human will be the winner.
 *
 * The function should return the following:
 * - Remaining power of the last human or zombie.
 * - "z" if the zombies are more than the humans.
 * - "h" if the humans are more than the zombies.
 * - "x" if the zombies and humans are equal.
 *
 * @example
 * battleHorde("242", "334"); // -> "2h"
 * battleHorde("444", "282"); // -> "x"
 *
 * @function battleHorde
 * @param {string} zombies -
 * @param {string} humans
 */
function battleHorde(zombies, humans) {
  let totalZombiesPower = 0;
  let totalHumansPower = 0;

  for (let round = 0; round < zombies.length; round++) {
    totalZombiesPower += parseInt(zombies[round]);
    totalHumansPower += parseInt(humans[round]);
  }

  const powerDifference = Math.abs(totalZombiesPower - totalHumansPower);

  if (totalZombiesPower > totalHumansPower) {
    return `${powerDifference}z`;
  }

  if (totalHumansPower > totalZombiesPower) {
    return `${powerDifference}h`;
  }

  return "x";
}

// Test A
const zombiesA = "242";
const humansA = "334";

console.log(battleHorde(zombiesA, humansA)); // -> "2h"

// Test B
const zombiesB = "444";
const humansB = "282";

console.log(battleHorde(zombiesB, humansB)); // -> "x"
