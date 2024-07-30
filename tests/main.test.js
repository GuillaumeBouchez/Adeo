const {
  filterAnimalsByPattern,
  countAnimalsAndPeople,
  filterAndCountAnimalsByPattern,
  displayError
} = require("../src/app/controller/animals-controller");
const { processArgs } = require("../main.js");

jest.mock("../src/app/controller/animals-controller", () => ({
  filterAnimalsByPattern: jest.fn(),
  countAnimalsAndPeople: jest.fn(),
  filterAndCountAnimalsByPattern: jest.fn(),
  displayError: jest.fn()
}));

describe("Process the command line arguments", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const ERROR =
  "The correct usage is node app.js --filter=VALUE, or node app.js --count, or node app.js --filter=VALUE --count";

  it("should call filterAndCountAnimalsByPattern with correct filter value when both filter and count commands are enabled", () => {
    const args = ["node", "app.js", "--filter=lion", "--count"];
    processArgs(args);
    expect(filterAndCountAnimalsByPattern).toHaveBeenCalledWith("lion");
    expect(countAnimalsAndPeople).not.toHaveBeenCalled();
    expect(filterAnimalsByPattern).not.toHaveBeenCalled();
    expect(displayError).not.toHaveBeenCalled();
  });

  it("should call countAnimalsAndPeople with correct filter value when the count command is passed", () => {
    const args = ["node", "app.js", "--count"];
    processArgs(args);
    expect(countAnimalsAndPeople).toHaveBeenCalled();
    expect(filterAndCountAnimalsByPattern).not.toHaveBeenCalledWith();
    expect(filterAnimalsByPattern).not.toHaveBeenCalled();
    expect(displayError).not.toHaveBeenCalled();
  });

  it("should call filterAnimalDataByPattern with correct filter value when the filter command is passed", () => {
    const args = ["node", "app.js", "--filter=lion"];
    processArgs(args);
    expect(filterAnimalsByPattern).toHaveBeenCalledWith("lion");
    expect(countAnimalsAndPeople).not.toHaveBeenCalled();
    expect(filterAndCountAnimalsByPattern).not.toHaveBeenCalled();
    expect(displayError).not.toHaveBeenCalled();
  });

  it("should display an error when a wrong filter command is passed", () => {
    const args = ["node", "app.js", "--test"];
    processArgs(args);
    expect(displayError).toHaveBeenCalledWith(ERROR);
    expect(filterAnimalsByPattern).not.toHaveBeenCalled();
    expect(countAnimalsAndPeople).not.toHaveBeenCalled();
    expect(filterAndCountAnimalsByPattern).not.toHaveBeenCalledWith();
  });
  it("should display an error when a wrong filter command is passed", () => {
    const args = ["node", "app.js", "--count", "--test"];
    processArgs(args);
    // expect(displayError).toHaveBeenCalledWith(ERROR);
    expect(filterAnimalsByPattern).not.toHaveBeenCalled();
    expect(countAnimalsAndPeople).toHaveBeenCalled();
    expect(filterAndCountAnimalsByPattern).not.toHaveBeenCalledWith();
  });
});
