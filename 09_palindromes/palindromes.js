const palindromes = function (s) {
    cleanS = s.toLowerCase().replace(/[^a-z]/g, '');
    return cleanS === cleanS.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
