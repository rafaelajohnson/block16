/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === Helpers ===

/**
 * Generate a random number between min and max (inclusive)
 */
function getRandomRate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * Create a random Freelancer object
   * @returns {Freelancer}
   */
  function generateFreelancer() {
    return {
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
      rate: getRandomRate(PRICE_RANGE.min, PRICE_RANGE.max),
    };
  }
  