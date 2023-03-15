const add = function (aOper, bOper) {
  return aOper + bOper;
};

const subtract = function (aOper, bOper) {
  return aOper - bOper;
};

const sum = function (args) {
  let sum = 0;
  if (!args.length) {
    return sum;
  }

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

const multiply = function (args) {
  let product = 1;

  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }

  return product;
};

const power = function (aOper, bOper) {
  return aOper ** bOper;
};

const factorial = function (arg) {
  let product = 1;

  for (; arg > 0; arg--) {
    product *= arg;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
