const palindromes = function (param) {
  let punctuation = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let noPunctuation = param
    .split("")
    .filter((char) => punctuation.indexOf(char) === -1)
    .join("")
    .toLowerCase();

  let reversed = noPunctuation.split("").reverse().join("").toLowerCase();

  if (noPunctuation === reversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
