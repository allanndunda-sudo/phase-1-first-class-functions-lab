const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0, 2);
}


const returnLastTwoDrivers= function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    };
}

const fareDouble = createNewMultiplier(2);

const result= fareDouble(12);

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers){
    return drivers.slice(0, 2);
}

function selectDifferentDrivers(drivers){
    return drivers.slice(-2);
}

function selectDifferentDrivers(drivers, fn){
    return fn(drivers);
}