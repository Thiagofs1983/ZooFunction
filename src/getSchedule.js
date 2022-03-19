const { species, hours } = require('../data/zoo_data');

const getAllAnimals = () => species.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);

const getAnimalsPerDay = (dayOfWeek) => species.filter((element) => element.availability
  .includes(dayOfWeek)).reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);

const hoursAndAnimalsPerDay = () => Object.keys(hours).reduce((acc, curr) => {
  acc[curr] = {
    officeHour: curr !== 'Monday' ? `Open from ${hours[curr].open}am until ${hours[curr]
      .close}pm` : 'CLOSED',
    exhibition: curr !== 'Monday' ? getAnimalsPerDay(curr) : 'The zoo will be closed!',
  };
  return acc;
}, {});

const getScheduleIncludes = (scheduleTarget) => {
  const hoursAnimals = Object.keys(hours);
  if (hoursAnimals.includes(scheduleTarget)) {
    return { [scheduleTarget]: hoursAndAnimalsPerDay()[scheduleTarget] };
  }
  if (getAllAnimals().includes(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const hoursAnimals = Object.keys(hours);
  if (!scheduleTarget) return hoursAndAnimalsPerDay();
  if (!hoursAnimals.includes(scheduleTarget)
  && !getAllAnimals().includes(scheduleTarget)) return hoursAndAnimalsPerDay();
  return getScheduleIncludes(scheduleTarget);
}

module.exports = getSchedule;
