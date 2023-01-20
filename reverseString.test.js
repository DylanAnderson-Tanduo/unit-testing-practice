import reverseString from "./reverseString";

test("returns a string reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("works on single letter strings", () => {
  expect(reverseString("i")).toBe("i");
});

test("returns error for empty strings", () => {
  expect(reverseString("")).toBe("Error");
});

test("keeps casing", () => {
  expect(reverseString("HelLO")).toBe("OLleH");
});