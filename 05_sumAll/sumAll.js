const sumAll = function (n1, n2) {
    if (!(Number.isInteger(n1) && Number.isInteger(n2)) || (n1 < 0 || n2 < 0)) {
        return 'ERROR';
    }
    let start = n1 <= n2 ? n1 : n2;
    const end = n2 >= n1 ? n2 : n1;
    let result = 0;
    while (start <= end) {
        result += start;
        ++start;
    }
    return result;

};

//1 + 

// Do not edit below this line
module.exports = sumAll;
