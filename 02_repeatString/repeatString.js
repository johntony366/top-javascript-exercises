const repeatString = function (string, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let str = "";
    while (n-- > 0) {
        str += string;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
