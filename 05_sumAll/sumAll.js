const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {
        let swap = min;
        max = swap;
        min = max;
    }

    let finalSum = 0;
    for (let i = 0; i <= max; i++) {
        finalSum += i;
    }

    return finalSum;
    
};

// Do not edit below this line
module.exports = sumAll;
