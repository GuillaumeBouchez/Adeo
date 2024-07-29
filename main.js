const {
  filterAndCountAnimalsByPattern,
  filterAnimalsByPattern,
  countAnimalsAndPeople,
	displayError
} = require("./src/app/controller/animals-controller");

const FILTER = "--filter=";
const COUNT = "--count";
const ERROR =
  "The correct usage is node app.js --filter=VALUE, or node app.js --count, or node app.js --filter=VALUE --count";

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
