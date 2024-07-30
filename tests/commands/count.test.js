const { countData } = require("../../src/app/commands/count");

describe(countData.name, () => {
  const COUNTRY_A = "COUNTRY_A";
  const COUNTRY_B = "COUNTRY_B";

  const PEOPLE_A = "PEOPLE_A";
  const PEOPLE_B = "PEOPLE_B";

  const ANIMAL_A = "ANIMAL_A";
  const ANIMAL_B = "ANIMAL_B";
  const ANIMAL_C = "ANIMAL_C";

  it("Write the number of people after country names and the number of  after people's names ", () => {
    const A_NORMAL_INPUT = [
      {
        name: COUNTRY_A,
        people: [
          {
            name: PEOPLE_A,
            animals: [
              {
                name: ANIMAL_A,
              },
              {
                name: ANIMAL_B,
              },
            ],
          },
        ],
      },
      {
        name: COUNTRY_B,
        people: [
          {
            name: PEOPLE_B,
            animals: [
              {
                name: ANIMAL_C,
              },
            ],
          },
        ],
      },
    ];

    const expectedValue = [
      {
        name: "COUNTRY_A [1]",
        people: [
          {
            name: "PEOPLE_A [2]",
            animals: [{ name: "ANIMAL_A" }, { name: "ANIMAL_B" }],
          },
        ],
      },
      {
        name: "COUNTRY_B [1]",
        people: [{ name: "PEOPLE_B [1]", animals: [{ name: "ANIMAL_C" }] }],
      },
    ];

    const result = countData(A_NORMAL_INPUT);

    expect(result).toEqual(expectedValue);
  });

  it("Can handle empty inputs", () => {
    const AN_EMPTY_INPUT = [];

    const expectedValue = [];

    const result = countData(AN_EMPTY_INPUT);

    expect(result).toEqual(expectedValue);
  });

  it("Can handle people with no animals", () => {
    const AN_INPUT_WITH_NO_ANIMAL = [
      {
        name: COUNTRY_A,
        people: [
          {
            name: PEOPLE_A,
            animals: [],
          },
        ],
      },
    ];

    const expectedValue = [
      {
        name: "COUNTRY_A [1]",
        people: [
          {
            name: "PEOPLE_A [0]",
            animals: [],
          },
        ],
      },
    ];

    const result = countData(AN_INPUT_WITH_NO_ANIMAL);

    expect(result).toEqual(expectedValue);
  });

  it("Can handle countries with no people", () => {
    const AN_INPUT_WITH_NO_PEOPLE = [
      {
        name: COUNTRY_A,
        people: [],
      },
    ];

    const expectedValue = [
      {
        name: "COUNTRY_A [0]",
        people: [],
      },
    ];

    const result = countData(AN_INPUT_WITH_NO_PEOPLE);

    expect(result).toEqual(expectedValue);
  });
});
