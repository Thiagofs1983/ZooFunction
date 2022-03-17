const { employees, species } = require('../data/zoo_data');

function getIdFirstSpecie(id) {
  const firstEmployee = employees.find((element) => element.id === id);
  return firstEmployee.responsibleFor[0];
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = species.find((element) => element.id === getIdFirstSpecie(id));
  const { residents } = firstSpecie;
  const oldestFromSpecie = residents.reduce((acc, curr) => {
    if (acc.age < curr.age) return curr;
    return acc;
  });
  return Object.values(oldestFromSpecie);
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
