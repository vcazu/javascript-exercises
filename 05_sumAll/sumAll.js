const sumAll = function (operandL, operandR) {
  let sum = 0;

  switch (true) {
    case typeof operandL !== "number":
    case typeof operandR !== "number":
    case operandL < 0:
    case operandR < 0:
      return "ERROR";
    case operandL < operandR:
      for (; operandL <= operandR; operandL++) {
        sum += operandL;
      }
      break;
    case operandL > operandR:
      for (; operandL >= operandR; operandL--) {
        sum += operandL;
      }
      break;
    default:
      return "something went wrong";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
