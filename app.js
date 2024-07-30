const {
  filterAndCountAnimalsByPattern,
  filterAnimalsByPattern,
  countAnimalsAndPeople,
	displayError
} = require("./src/app/controller/animals-controller");

const { FILTER, COUNT, ERROR } = require("./src/utils/command-line-values")

const processArgs = (argv) => {
	const args = argv.slice(2);

  let filterValue = null;
  let countEnabled = false;

  for (const arg of args) {
    if (arg.startsWith(FILTER)) {
      filterValue = arg.substring(FILTER.length);
    } else if (arg === COUNT) {
      countEnabled = true;
    }
  }

  if (filterValue && countEnabled) {
    filterAndCountAnimalsByPattern(filterValue);
  } else if (filterValue) {
    filterAnimalsByPattern(filterValue);
  } else if (countEnabled) {
    countAnimalsAndPeople();
  } else {
    displayError(ERROR);
  }
};

processArgs(process.argv);

module.exports = { processArgs };
