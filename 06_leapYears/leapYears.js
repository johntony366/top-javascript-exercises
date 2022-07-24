const leapYears = function(year) {
    //If year is divisible by 100, it should also be divisible by 400
    //Otherwise it should be divisible by 4
    if (year % 100 == 0) {
        return (year % 400 == 0);
    }
    return (year % 4 == 0);
};

// Do not edit below this line
module.exports = leapYears;
