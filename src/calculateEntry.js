const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqu
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const count = {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
  return count;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const valueChild = child * prices.child;
  const valueAdult = adult * prices.adult;
  const valueSenior = senior * prices.senior;
  const valueTotal = valueAdult + valueChild + valueSenior;
  return valueTotal;
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
