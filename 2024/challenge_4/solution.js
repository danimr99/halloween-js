/**
 * Find the killer by the whisper that the victim left.
 *
 * The killer left a whisper that contains the name of the killer.
 * The whisper is a string with the name of the killer but some characters are replaced by a `~` character because was ininteligible.
 *
 * You need to find the possible killers by the whisper that the victim left.
 *
 * If the whisper is not clear enough to find the killer, you should return an empty string.
 *
 * @example
 * const whisper = "d~~~~~a";
 * const suspects = [
 * "Dracula",
 * "Freddy Krueger",
 * "Jason Voorhees",
 * "Michael Myers",
 * ];
 *
 * findTheKiller(whisper, suspects); // -> "Dracula"
 *
 *
 * @function findTheKiller
 * @param {string} whisper - The whisper that the killer left.
 * @param {string[]} suspects - The list of suspects.
 * @returns {string} - The name or names of the killer.
 */
function findTheKiller(whisper, suspects) {
  let index = 0;
  let unknownCount = 0;
  let searchPattern = "^";

  while (index < whisper.length) {
    if (whisper[index] !== "~") {
      searchPattern += whisper[index];
      index++;
      continue;
    }

    while (whisper[index] === "~") {
      unknownCount++;
      index++;
    }

    searchPattern += `[^~]{${unknownCount}}`;
    unknownCount = 0;
  }

  const regex = new RegExp(searchPattern, "i");
  const candidates = suspects.filter((suspect) => regex.test(suspect));

  return candidates.length === 0 ? "" : candidates.join(",");
}

// Test A
const whisperA = "d~~~~~a";
const suspectsA = [
  "Dracula",
  "Freddy Krueger",
  "Jason Voorhees",
  "Michael Myers",
];

console.log(findTheKiller(whisperA, suspectsA)); // "Dracula"

// Test B
const whisperB = "~r~dd~";
const suspectsB = ["Freddy", "Freddier", "Fredderic"];

console.log(findTheKiller(whisperB, suspectsB)); // -> 'Freddy, Freddier, Fredderic'

// Test C
const whisperC = "~r~dd$";
const suspectsC = ["Freddy", "Freddier", "Fredderic"];

console.log(findTheKiller(whisperC, suspectsC)); // -> ''

// Test D
const whisperD = "mi~~def";
const suspectsD = ["Midudev", "Midu", "Madeval"];

console.log(findTheKiller(whisperD, suspectsD)); // -> ''

// Test E
const whisperE = "~~~~~~$";
const suspectsE = ["Pennywise", "Leatherface", "Agatha"];

console.log(findTheKiller(whisperE, suspectsE)); // -> 'Agatha'
