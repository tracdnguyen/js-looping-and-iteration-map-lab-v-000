// Code your solution in this file.
function lowerCaseDrivers(string) {
  return string.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(names) {
    const firstDriver = names.split(' ')[0];
    const lastDriver = names.split(' ')[1];

    return { firstName: firstDriver, lastName: lastDriver};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(attr) {
    const driverName = attr.name
    const driverHome = attr.hometown

    return `${driverName} is from ${driverHome}`
  })
}
