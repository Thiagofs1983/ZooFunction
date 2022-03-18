const { species } = require('../data/zoo_data');

const getAnimalRegion = () => species.reduce((acc, curr) => {
  acc[curr.location] = species.filter((element) => element.location === curr.location)
    .reduce((acc2, curr2) => {
      acc2.push(curr2.name);
      return acc2;
    }, []);
  return acc;
}, {});

const getNameAnimals = (animal) => species.filter((element) => element.name === animal)[0]
  .residents.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);

const getAnimalsPerNamePerRegion = (region) => species.filter((element) =>
  element.location === region).map(({ name }) => ({ [name]: getNameAnimals(name) }));

const animalsPerLocation = () => species.reduce((acc, curr) => {
  acc[curr.location] = getAnimalsPerNamePerRegion(curr.location);
  return acc;
}, {});

const getNameAnimalsSorted = (animal) => species.filter((element) => element.name === animal)[0]
  .residents.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []).sort();

const getAnimalsPerNamePerRegionSorted = (region) => species.filter((element) =>
  element.location === region).map(({ name }) => ({ [name]: getNameAnimalsSorted(name) }));

const animalsPerLocationSorted = () => species.reduce((acc, curr) => {
  acc[curr.location] = getAnimalsPerNamePerRegionSorted(curr.location);
  return acc;
}, {});

const getNameAnimalsPerSex = (animal, options) => species.filter((element) =>
  element.name === animal)[0]
  .residents.filter((element) => element.sex === options.sex).reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);

const getAnimalsPerNamePerRegionPerSex = (region, options) => species.filter((element) =>
  element.location === region).map(({ name }) => ({ [name]: getNameAnimalsPerSex(name, options) }));

const animalsPerLocationPerSex = (options) => species.reduce((acc, curr) => {
  acc[curr.location] = getAnimalsPerNamePerRegionPerSex(curr.location, options);
  return acc;
}, {});

const getNameAnimalsPerSexSorted = (animal, options) => species.filter((element) =>
  element.name === animal)[0]
  .residents.filter((element) => element.sex === options.sex).reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []).sort();

const getAnimalsPerNamePerRegionPerSexSorted = (region, options) => species.filter((element) =>
  element.location === region).map(({ name }) =>
  ({ [name]: getNameAnimalsPerSexSorted(name, options) }));

const animalsPerLocationPerSexSorted = (options) => species.reduce((acc, curr) => {
  acc[curr.location] = getAnimalsPerNamePerRegionPerSexSorted(curr.location, options);
  return acc;
}, {});

const optionsIncludeNames = (options) => {
  if (Object.keys(options).length === 3) {
    return animalsPerLocationPerSexSorted(options);
  }
  if (options.sorted === true) return animalsPerLocationSorted();
  if (options.sex === 'female') {
    return animalsPerLocationPerSex(options);
  } return animalsPerLocation();
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) return getAnimalRegion();
  return optionsIncludeNames(options);
}

module.exports = getAnimalMap;
