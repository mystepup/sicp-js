const {abs} = require("../common/utils")

let count = 0
function cube(x) {
    return x * x * x;
}

function p(x) {
    return 3 * x - 4 * cube(x);
}

function sine(angle) {
    count++;
    return ! (abs(angle) > 0.1)
        ? angle
        : p(sine(angle / 3));
}

sine(200)
console.log(count)

// space 2 ** logn
// step logn