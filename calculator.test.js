import calculator from "./calculator";
// Addition
test("adds two numbers together", () => {
  expect(calculator.add(2.5, 3)).toBe(5);
});

test("adds two numbers together when one is negative", () => {
  expect(calculator.add(-2, 3)).toBe(1);
});

test("adds two numbers together when both are negative", () => {
  expect(calculator.add(-2, -3)).toBe(-5);
});

test("rounds the result down", () => {
  expect(calculator.add(10.5, 3)).toBe(13);
});

test("doesn't except inputs that aren't numbers", () => {
  expect(calculator.add("Two")).toBe("Error");
});

// Subtraction
test("subtracts two numbers ", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("subtracts two numbers when one is negative", () => {
  expect(calculator.subtract(-2, 3)).toBe(-5);
});

test("subtracts two numbers when both are negative", () => {
  expect(calculator.subtract(-10, -3)).toBe(-7);
});

test("rounds the result down", () => {
  expect(calculator.subtract(10, 3.5)).toBe(6);
});

test("doesn't except inputs that aren't numbers", () => {
  expect(calculator.subtract("Two")).toBe("Error");
});

// Multiplication
test("multiplys two numbers together", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("multiplys two numbers together when one is negative", () => {
  expect(calculator.multiply(-2, 6)).toBe(-12);
});

test("multiplys two numbers together when both are negative", () => {
  expect(calculator.multiply(-5, -2)).toBe(10);
});

test("rounds the result down", () => {
  expect(calculator.multiply(5, 3.5)).toBe(17);
});


test("doesn't except inputs that aren't numbers", () => {
  expect(calculator.multiply("Two")).toBe("Error");
});

// Division
test("divides two numbers ", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("divides two numbers when one is negative", () => {
  expect(calculator.divide(-20, 5)).toBe(-4);
});

test("divides two numbers when both are negative", () => {
  expect(calculator.divide(-32, -8)).toBe(4);
});

test("rounds the result down", () => {
  expect(calculator.divide(12, 9)).toBe(1);
});

test("doesn't except inputs that aren't numbers", () => {
  expect(calculator.divide("Two")).toBe("Error");
});
