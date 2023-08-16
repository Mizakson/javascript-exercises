const reverseString = function(str) {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let finalArr = reverseArr.join("");
    return finalArr;
};

// Do not edit below this line
module.exports = reverseString;
