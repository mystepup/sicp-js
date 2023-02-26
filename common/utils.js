function abs(x) {
    return x > 0 ? x : -x
}
function square(x) {
    return x * x;
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

module.exports = {
    abs, square, is_even, double, halve, gcd
}