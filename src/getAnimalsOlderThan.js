const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = species.find((element) => element.name === animal);
  return findAnimal.residents.every((element) => element.age >= age);
}
console.log(getAnimalsOlderThan('lions'));

module.exports = getAnimalsOlderThan;
