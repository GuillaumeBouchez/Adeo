const filterAnimalNameByPattern = (pattern, data) => {
  return data.reduce((accCountries, country) => {
    const filteredPeople = country.people.reduce((accPeople, people) => {
      const filteredAnimals = people.animals.filter((animal) =>
        animal.name.toLowerCase().includes(pattern.toLowerCase())
      );

      if (filteredAnimals.length) {
        accPeople.push({ ...people, animals: filteredAnimals });
      }
      return accPeople;
    }, []);

    if (filteredPeople.length) {
      accCountries.push({ ...country, people: filteredPeople });
    }
    return accCountries;
  }, []);
};

module.exports = { filterAnimalNameByPattern };
