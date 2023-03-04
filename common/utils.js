function abs(x) {
    return x > 0 ? x : -x
}
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}
function is_even(x) {
    return x % 2 === 0;
}
function double(x) {
    return x + x;
}
function halve(x) {
    return x / 2;
}
function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y)
}

function average(x, y) {
    return (x + y) / 2;
}

function sum(term, a, next, b) {
    return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function display(x) {
    console.log(x)
}

module.exports = {
    abs, square, is_even, double, halve, gcd, average, sum, cube, display
}