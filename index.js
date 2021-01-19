// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(num){return num * multiplier}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers)
}