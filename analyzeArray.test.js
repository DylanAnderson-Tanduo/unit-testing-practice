import analyzeArray from "./analyzeArray";

test("doesn't accept arrays of non number values", () => {
  expect(analyzeArray(["two", "fish", "blue"])).toBe("Error");
});

test("doesn't accept arrays that contain non number values", () => {
  expect(analyzeArray([1, 2, "blue"])).toBe("Error");
});

test("returns an object containg the average of the array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});

test("returns an object containg the min of the array", () => {
  expect(analyzeArray([2, 3, 1, 4, 5]).min).toBe(1);
});

test("returns an object containg the max of the array", () => {
  expect(analyzeArray([2, 3, 1, 4, 5]).max).toBe(5);
});

test("returns an object containg the length of the array", () => {
  expect(analyzeArray([2, 3, 1, 4, 5]).length).toBe(5);
});

test("works on an array with only one element", () => {
  expect(analyzeArray([2])).toStrictEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 1,
  });
});

test("works on an array with only negative elements", () => {
  expect(analyzeArray([2, -5, 5, -4, 20])).toStrictEqual({
    average: 3.6,
    min: -5,
    max: 20,
    length: 5,
  });
});


test("errors on an empty array", () => {
  expect(analyzeArray([])).toBe('Error');
});