const removeFromArray = function(arr, value) {
    return arr.filter(function (correctValues) {
        return correctValues != value;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
