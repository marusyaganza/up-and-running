import { formatDate, formatDateInArray } from "../flights.model"; // Replace with the actual file name

// Mock the Document type from mongoose
type MockDocument = {
  toObject: () => any;
};

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const mockData = {
      date: new Date("2023-01-15"),
      toObject: jest.fn().mockReturnValue({
        date: new Date("2023-01-15"),
        someOtherField: "value",
      }),
    } as MockDocument & { date: Date };

    const result = formatDate(mockData);

    expect(result).toEqual({
      date: "Sun Jan 15 2023",
      someOtherField: "value",
    });
    expect(mockData.toObject).toHaveBeenCalled();
  });
});

describe("formatDateInArray", () => {
  it("should format dates for all items in the array", () => {
    const mockArray = [
      {
        date: new Date("2023-01-15"),
        toObject: jest.fn().mockReturnValue({
          date: new Date("2023-01-15"),
          field1: "value1",
        }),
      },
      {
        date: new Date("2023-02-20"),
        toObject: jest.fn().mockReturnValue({
          date: new Date("2023-02-20"),
          field2: "value2",
        }),
      },
    ] as (MockDocument & { date: Date })[];

    const result = formatDateInArray(mockArray);

    expect(result).toEqual([
      { date: "Sun Jan 15 2023", field1: "value1" },
      { date: "Mon Feb 20 2023", field2: "value2" },
    ]);
    mockArray.forEach((item) => expect(item.toObject).toHaveBeenCalled());
  });
});
