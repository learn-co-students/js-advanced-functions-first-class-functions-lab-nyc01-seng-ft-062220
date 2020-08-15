// Code your solution in this file!

const returnFirstTwoDrivers = function (driverArray) {
    const newArray = driverArray.slice(0,2)
    return newArray
}

const returnLastTwoDrivers = function(driverArray) {
    const arrayLength = driverArray.length
    const anotherNewArray =  driverArray.slice((arrayLength - 2))
    return anotherNewArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArray, anotherFunction) {
    return anotherFunction(driverArray)
}