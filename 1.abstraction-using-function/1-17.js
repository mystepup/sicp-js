const {is_even} = require("../common/utils");

function times(a, b) {
    return b === 0
        ? 0
        : a + times(a, b - 1);
}

function double(x) {
    return x + x;
}

function halve(x) {
    if (x % 2 !== 0) throw new Error("x should be even number")
    return x / 2;
}

function iterative_time(x, a, b) {
    return b === 0 ? x : is_even(b)
        ? iterative_time(x, double(a), halve(b))
        : iterative_time(x + a, a, b - 1)
}

console.log(iterative_time(0, 5, 10))