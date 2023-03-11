const {pair, head, tail, display, gcd} = require("../../../common/utils");

function make_rat(n, d) {
    const g = gcd(n, d)
    return pair(n / g, d / g)
}

function numer(a) {
    return head(a);
}

function denom(b) {
    return tail(b);
}

function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x), denom(x) * denom(y))
}

function print_rat(x) {
    return display(JSON.stringify(numer(x)) + " / " + JSON.stringify(denom(x)))
}

const one_half = make_rat(1, 2)

const one_third = make_rat(1, 3)

print_rat(one_half)

print_rat(add_rat(one_half, one_third))

print_rat(add_rat(one_third, one_third))