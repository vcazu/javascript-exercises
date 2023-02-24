let greeting = "hey";
const repeatString = function (string, num) {
  for (let i = 0; i < num; i++) {
    greeting += string;
    return greeting;
  }
};

repeatString(greeting, 10);

// Do not edit below this line
module.exports = repeatString;
