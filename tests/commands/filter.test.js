const { filterAnimalNameByPattern } = require("../../src/app/commands/filter");

describe(filterAnimalNameByPattern.name, () => {
  const COUNTRY_A = "COUNTRY_A";
  const COUNTRY_B = "COUNTRY_B";

  const PEOPLE_A = "PEOPLE_A";
  const PEOPLE_B = "PEOPLE_B";

  const A_NORMAL_INPUT = [
    {
      name: COUNTRY_A,
      people: [
        {
          name: PEOPLE_A,
          animals: [
            {
              name: "Cat",
            },
            {
              name: "Dog",
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
              name: "Rat",
            },
          ],
        },
      ],
    },
  ];

  it("should only contain the data with the animal's name containing the wanted pattern", () => {
    const A_PATTERN = "a";

    const expectedValue = [
      {
        name: "COUNTRY_A",
        people: [{ name: "PEOPLE_A", animals: [{ name: "Cat" }] }],
      },
      {
        name: "COUNTRY_B",
        people: [{ name: "PEOPLE_B", animals: [{ name: "Rat" }] }],
      },
    ];

    const result = filterAnimalNameByPattern(A_PATTERN, A_NORMAL_INPUT);

    expect(result).toEqual(expectedValue);
  });

  it("should return an empty response when there are no animals names containing the wanted pattern", () => {
    const A_PATTERN = "z";

    const expectedValue = [];

    const result = filterAnimalNameByPattern(A_PATTERN, A_NORMAL_INPUT);

    expect(result).toEqual(expectedValue);
  });

  it("should return an empty response when there are no animals", () => {
    const A_PATTERN = "a";

    const AN_INPUT_WITH_NO_ANIMALS = [
        {
          name: COUNTRY_A,
          people: [
            {
              name: PEOPLE_A,
              animals: [],
            },
          ],
        },
        {
          name: COUNTRY_B,
          people: [
            {
              name: PEOPLE_B,
              animals: [],
            },
          ],
        },
      ];

    const expectedValue = [];

    const result = filterAnimalNameByPattern(A_PATTERN, AN_INPUT_WITH_NO_ANIMALS);

    expect(result).toEqual(expectedValue);
  });
});
