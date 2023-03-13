const add = function (aOper, bOper) {
  return +aOper + +bOper;
};

const subtract = function (aOper, bOper) {
  return +aOper - +bOper;
};

const sum = function (props) {
  let sum = 0;
  if (!props.length) {
    return sum;
  }

  for (let i = 0; i < props.length; i++) {
    sum += props[i];
  }

  return sum;
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
