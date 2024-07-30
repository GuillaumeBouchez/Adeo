const { data } = require("../../../ressources/data");
const { filterAnimalNameByPattern } = require("../commands/filter");
const { countData } = require("../commands/count");

const filterAnimalsByPattern = (pattern) => {
  const filteredAnimals = filterAnimalNameByPattern(pattern, data);
  console.dir(filteredAnimals, { depth: null });
  return filteredAnimals;
};

const countAnimalsAndPeople = () => {
  const countedAnimalsAndPeopleByCountry = countData(data);
  console.dir(countedAnimalsAndPeopleByCountry, { depth: null });
  return countedAnimalsAndPeopleByCountry;
};

const filterAndCountAnimalsByPattern = (pattern) => {
  const filteredAnimals = filterAnimalNameByPattern(pattern, data);
  const countedAnimalsAndPeopleByCountry = countData(filteredAnimals);
  console.dir(countedAnimalsAndPeopleByCountry, { depth: null });
  return filterAndCountAnimalsByPattern;
};

const displayError = (error) => {
  console.log(error);
  return;
};

module.exports = {
  filterAndCountAnimalsByPattern,
  filterAnimalsByPattern,
  countAnimalsAndPeople,
  displayError,
};
