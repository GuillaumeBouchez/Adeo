const { data } = require("../../../ressources/data");
const { filterAnimalDataByPattern } = require("../commands/filter");
const { countAnimalsAndPeopleByCountry } = require("../commands/count");

const filterAnimalsByPattern = (pattern) => {
  console.log("HERE");
  const filteredAnimals = filterAnimalDataByPattern(pattern, data);
  console.dir(filteredAnimals, { depth: null });
  return filteredAnimals;
};

const countAnimalsAndPeople = () => {
  const countedAnimalsAndPeopleByCountry = countAnimalsAndPeopleByCountry(data);
  console.dir(countedAnimalsAndPeopleByCountry, { depth: null });
  return countAnimalsAndPeopleByCountry;
};

const filterAndCountAnimalsByPattern = (pattern) => {
  const filteredAnimals = filterAnimalDataByPattern(pattern, data);
  const countedAnimalsAndPeopleByCountry = countAnimalsAndPeopleByCountry(filteredAnimals);
  console.dir(countedAnimalsAndPeopleByCountry, { depth: null });
  return countAnimalsAndPeopleByCountry;
};

const displayError = (error) => {
  console.log(error)
  return
}

module.exports = {
  filterAndCountAnimalsByPattern,
  filterAnimalsByPattern,
  countAnimalsAndPeople,
  displayError
};
