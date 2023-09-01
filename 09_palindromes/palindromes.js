const palindromes = function (str) {
    const pStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    return pStr.split('').reverse().join('') == pStr;
};

// Do not edit below this line
module.exports = palindromes;
