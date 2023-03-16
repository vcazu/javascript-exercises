const fibonacci = function (arg) {
  if (+arg < 1) {
    return "OOPS";
  }

  let arr = [0, 1];

  for (let i = arr.length; i <= +arg; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[arr.length - 1];
};

//https://www.cuemath.com/algebra/fibonacci-numbers/
//https://byjus.com/maths/fibonacci-numbers/
// Do not edit below this line
module.exports = fibonacci;
