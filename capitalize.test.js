import capitalize from "./capitalize";

test("doesn't accept invalid input", () => {
  expect(capitalize(21323)).toBe("Invalid Input");
});

test("capitalizes first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Lower cases the rest of the word", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});

test("works with only one letter", () => {
  expect(capitalize("h")).toBe("H");
});

test("works with empty string ``", () => {
  expect(capitalize("")).toBe("");
});