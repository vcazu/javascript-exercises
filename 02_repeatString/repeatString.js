const repeatString = function (greet, num) {
  let msg = "";

  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      msg += greet;
    }

    return msg;
  }
};

// Do not edit below this line
module.exports = repeatString;
