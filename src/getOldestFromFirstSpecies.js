const { employees, species } = require('../data/zoo_data');

function getIdFirstSpecie(id) {
  const firstEmployee = employees.find((element) => element.id === id);
  return firstEmployee.responsibleFor[0];
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = species.find((specie) => specie.id === getIdFirstSpecie(id));
  const { residents } = firstSpecie;
  const oldestFromSpecie = residents.reduce((acc, curr) => {
    if (acc.age < curr.age) return curr;
    return acc;
  });
  return Object.values(oldestFromSpecie);
}

module.exports = getOldestFromFirstSpecies;
