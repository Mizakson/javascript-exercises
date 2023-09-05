const fibonacci = function(num) {
    Number(num);
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 1;
    for (i = 1; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    if (num < 0) {
        return 'OOPS';
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
