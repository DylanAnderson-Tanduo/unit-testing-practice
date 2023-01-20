const reverseString = (string) => {
  if (string.length == 0) return "Error";
  return string.split("").reverse().join("");
};

export default reverseString;
