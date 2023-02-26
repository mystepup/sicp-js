const { is_even, square } = require("../common/utils");

function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
        ? square(expmod(base, exp / 2, m)) % m
        : (base * expmod(base, exp - 1, m)) % m
}

function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n, n) === a;
    }
    return try_it(1 + Math.floor(Math.random() * (n - 1)))
}

function fast_is_prime(n, times) {
    return times === 0
        ? true
        : fermat_test(n)
        ? fast_is_prime(n, times - 1)
        : false
}

console.log(fast_is_prime(1999, 1000))