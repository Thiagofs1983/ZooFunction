const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeesFilter = employees.filter((element) => element.managers.includes(managerId));
  return employeesFilter.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
