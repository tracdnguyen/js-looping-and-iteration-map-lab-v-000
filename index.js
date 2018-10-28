// Code your solution in this file.
function lowerCaseDrivers(string) {
  return string.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(name) {
  return name.map(function(attr) {
    return attr === name
  })
}