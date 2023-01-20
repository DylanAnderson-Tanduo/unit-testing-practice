let calculator = {
  add: (x, y) => {
    if (typeof x != "number" || typeof y != "number") return "Error";
    return Math.floor(x + y) ;
  },
  subtract: (x, y) => {
    if (typeof x != "number" || typeof y != "number") return "Error";
    return Math.floor(x - y);
  },
  multiply: (x, y) => {
    if (typeof x != "number" || typeof y != "number") return "Error";
    return Math.floor(x * y);
  },
  divide: (x, y) => {
    if (typeof x != "number" || typeof y != "number") return "Error";
    return Math.floor(x / y);
  },
};

export default calculator;
