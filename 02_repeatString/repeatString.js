const repeatString = function(str, num) {
    for (let i = 0; i <= num; i++) {
        return str.repeat(num);
    }
    if (num < 0) {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
