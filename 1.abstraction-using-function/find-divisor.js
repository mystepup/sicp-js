const { square } = require("../common/utils")

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

function smallest_divisor(n) {
    return find_divisor(n, 2)
}

function is_prime(n) {
    return n === smallest_divisor(n)
}


// console.log(smallest_divisor(199)) // 199
// console.log(smallest_divisor(1999)) // 1999
// console.log(smallest_divisor(19999)) // 7

module.exports = is_prime