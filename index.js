// Code your solution here

function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
};

function fuzzyMatch(drivers, string) {
  const l = string.length
  return drivers.filter(driver => driver.slice(0,l).toLowerCase() === string.toLowerCase());
};

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());

}

