const { species } = require('../data/zoo_data');

/*
1- Se nenhum argumento for passado, retorna um objeto
2- Objeto deve ter a chave com o nome de cada especie
3- O valor do objeto deve ser o total de animais da espécie
4- Recebendo como parametro um obj com chave specie, retorna a quantidade de animais daquela especie
5- Se parametro Obj specie e sex, retorna a quantidade de animais daquela espécie e sexo
*/
const creatObjAnimals = () => {
  const objAnimals = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  return objAnimals;
};

const countPerSpecie = (animal) => {
  const amountPerSpecie = species.find((element) => element.name === animal.specie)
    .residents.length;
  return amountPerSpecie;
};
console.log(countPerSpecie({ specie: 'penguins' }));

const countPerSpecieAndSex = (animal) => {
  const amountPerSpecieAndSex = species.find((element) => element.name === animal.specie)
    .residents.filter((element) => element.sex === animal.sex).length;
  return amountPerSpecieAndSex;
};
console.log(countPerSpecieAndSex({ specie: 'giraffes', sex: 'female' }));

function countAnimals(animal) {
  if (!animal) {
    return creatObjAnimals();
  }
  if (Object.keys(animal).length === 1) {
    return countPerSpecie(animal);
  }
  if (Object.keys(animal).length === 2) {
    return countPerSpecieAndSex(animal);
  }
}
console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
