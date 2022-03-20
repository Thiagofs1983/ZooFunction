const { employees, species } = require('../data/zoo_data');

const getIdSpeciesPerEmployee = ({ id, name }) => employees.find((element) =>
  element.id === id || element.firstName === name || element.lastName === name)
  .responsibleFor.reduce((acc, curr) => {
    acc.push(curr);
    return acc;
  }, []);

const coveragePerEmployee = () => employees.map(({ id: idEmployee, firstName, lastName }) => ({
  id: idEmployee,
  fullName: `${firstName} ${lastName}`,
  species: getIdSpeciesPerEmployee({ id: idEmployee }).reduce((acc2, curr2) => {
    acc2.push(species.find((element) => element.id === curr2).name);
    return acc2;
  }, []),
  locations: getIdSpeciesPerEmployee({ id: idEmployee }).reduce((acc2, curr2) => {
    acc2.push(species.find((element) => element.id === curr2).name);
    return acc2;
  }, []).reduce((acc, curr) => {
    acc.push(species.find((element) => element.name === curr).location);
    return acc;
  }, []),
}));

const findEmployee = ({ name, id }) => coveragePerEmployee()
  .find((element) => element.id === id || element.fullName.split(' ').includes(name));

function getEmployeesCoverage(employee) {
  // seu código aqui
  if (!employee) return coveragePerEmployee();
  if (findEmployee(employee) === undefined) throw new Error('Informações inválidas');
  return findEmployee(employee);
}

module.exports = getEmployeesCoverage;
