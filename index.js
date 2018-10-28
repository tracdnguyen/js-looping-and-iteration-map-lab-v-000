// Code your solution in this file.
function lowerCaseDrivers(string) {
  return string.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(name) {
  const newArr = []

  return name.map(function(attr) {
    return newArr.push(attr === name)
  })

  return newArr
}
