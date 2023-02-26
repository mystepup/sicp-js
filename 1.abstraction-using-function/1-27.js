const {is_even, square} = require("../common/utils");

function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
            ? square(expmod(base, exp / 2, m)) % m
            : (base * expmod(base, exp - 1, m)) % m
}

function carmichael_test(n) {
    let i = 0;
    for(; i < n; i++) {
        if (!(expmod(i, n, n) === i)) {
            break;
        }
    }
    return i >= n;
}

function smallest_divisor(n) {
    return find_divisor(n, 2)
}

function divides(a, b) {
    return b % a === 0
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, test_divisor + 1)
}

function is_prime(n) {
    return n === smallest_divisor(n)
}

// 561, 1105, 1729, 2465, 2821, 6601
console.log(carmichael_test(561))
console.log(carmichael_test(1105))
console.log(carmichael_test(1729))
console.log(carmichael_test(2465))
console.log(carmichael_test(2821))
console.log(carmichael_test(6601))
console.log(carmichael_test(1000003))

// 561, 1105, 1729, 2465, 2821, 6601
console.log(is_prime(561))
console.log(is_prime(1105))
console.log(is_prime(1729))
console.log(is_prime(2465))
console.log(is_prime(2821))
console.log(is_prime(6601))
console.log(is_prime(1000003))

