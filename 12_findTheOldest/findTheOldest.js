const findTheOldest = function (people) {
  return people.reduce((oldest, youngest) => {
    if (!oldest.yearOfDeath) {
      oldest.yearOfDeath = new Date().getFullYear();
    } else if (!youngest.yearOfDeath) {
      youngest.yearOfDeath = new Date().getFullYear();
    }

    let old = oldest.yearOfDeath - oldest.yearOfBirth;
    let young = youngest.yearOfDeath - youngest.yearOfBirth;

    return old < young ? youngest : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
