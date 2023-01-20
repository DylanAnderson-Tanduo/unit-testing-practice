const analyzeArray = (array) => {
  if (
    array.filter((x) => {
      return typeof x != "number";
    }).length > 0 ||
    array.length == 0
  ) {
    return "Error";
  }

  return {
    average: calcAverage(array),
    min: findMin(array),
    max: findMax(array),
    length: array.length,
  };
};

const calcAverage = (array) => {
  return (
    array.reduce((accumulator, currentValue) => accumulator + currentValue) /
    array.length
  );
};

const findMin = (array) => {
  let min = array[0];

  array.forEach((num) => {
    if (num < min) min = num;
  });

  return min;
};

const findMax = (array) => {
  let max = array[0];

  array.forEach((num) => {
    if (num > max) max = num;
  });

  return max;
};

export default analyzeArray;
