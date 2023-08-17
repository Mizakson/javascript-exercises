const leapYears = function(year) {
    // leap years are divisible by four
    // years divisible by 100 are not leap years
    // unless they are divisible by 400
    if (year % 100 === 0 && year % 400 !== 0 || year % 4 !== 0) {
        return false;
    } else {
        return true;
    }


};

// Do not edit below this line
module.exports = leapYears;
