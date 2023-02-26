const {square, is_even} = require("../common/utils");

function expmod(base, exp, m) {
    return fast_exp(base, exp) % m;
}

function fast_exp(b, n) {
    return n === 0
        ? 1
        : is_even(n)
            ? square(fast_exp(b, n / 2))
            : b * fast_exp(b, n - 1)
}

function try_it(a, n) {
    return expmod(a, n, n) === a;
}