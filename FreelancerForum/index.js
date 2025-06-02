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
  // === State ===

/** @type {Freelancer[]} */
const freelancers = Array.from({ length: NUM_FREELANCERS }, generateFreelancer);

/** @type {number} */
const averageRate = calculateAverageRate(freelancers);

/**
 * Calculate the average rate of freelancers
 * @param {Freelancer[]} freelancers
 * @returns {number}
 */
function calculateAverageRate(freelancers) {
  const total = freelancers.reduce((sum, f) => sum + f.rate, 0);
  return +(total / freelancers.length).toFixed(2);
}
// === Component: Freelancer Row ===
/**
 * Create a table row element for a freelancer
 * @param {Freelancer} freelancer
 * @returns {HTMLTableRowElement}
 */
function FreelancerRow(freelancer) {
    const tr = document.createElement("tr");
  
    const tdName = document.createElemßent("td");
    tdName.textContent = freelancer.name;
  
    const tdOccupation = document.createElement("td");
    tdOccupation.textContent = freelancer.occupation;
  
    const tdRate = document.createElement("td");
    tdRate.textContent = `$${freelancer.rate}`;
  
    tr.append(tdName, tdOccupation, tdRate);
    return tr;
  }

  // === Component: All Freelancer Rows ===
/**
 * Render all freelancer rows into a <tbody>
 * @returns {HTMLTableSectionElement}
 */
function FreelancerRows() {
    const tbody = document.createElement("tbody");
    freelancers.forEach(f => tbody.appendChild(FreelancerRow(f)));
    return tbody;
  }

  // === Component: Average Rate Display ===
/**
 * Display the average rate in a <p> element
 * @returns {HTMLParagraphElement}
 */
function AverageRateDisplay() {
    const p = document.createElement("p");
    p.innerHTML = `The average rate is <em>$${averageRate}</em>.`;
    return p;
  }
  
  // === Render Function ===
function renderApp() {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Clear existing content
  
    const h1 = document.createElement("h1");
    h1.textContent = "Freelancer Forum";
  
    const avgDisplay = AverageRateDisplay();
  
    const table = document.createElement("table");
  
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>NAME</th>
        <th>OCCUPATION</th>
        <th>RATE</th>
      </tr>
    `;
  
    const tbody = FreelancerRows();
  
    table.append(thead, tbody);
    app.append(h1, avgDisplay, table);
  }

  // === Mount the app ===
renderApp();