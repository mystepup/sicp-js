const { square } = require("../common/utils")

function divides(a, b) {
    return b % a === 0
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, next(test_divisor))
}

function next(x) {
    return x === 2 ? 3 : x + 2
}

function smallest_divisor(n) {
    return find_divisor(n, 2)
}

function is_prime(n) {
    return n === smallest_divisor(n)
}

function report_prime_test(n, elapsed_time) {
    console.log(n)
    console.log(elapsed_time)
}

function start_prime_test(n, start_time) {
    return is_prime(n) ? report_prime_test(n, Date.now() - start_time) : false
}


start_prime_test(1000037, Date.now())