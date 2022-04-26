// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = () => drivers.slice(0,2);

const returnLastTwoDrivers = () => drivers.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (mulitplyValue) => function (fare) {
    return fare * mulitplyValue;
  }
  
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driversToReturn) => {
    return driversToReturn() 
}





