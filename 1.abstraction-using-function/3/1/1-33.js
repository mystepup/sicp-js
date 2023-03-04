const { square } = require('../../../common/utils')

// filtered accumulation
function filtered_accumulation(filter, combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
            ? result
            : filter(a)
            ? iter(next(a), combiner(term(a), result))
            : iter(next(a), result)
    }
    return iter(a, null_value)
}

function is_prime(x) {
    function smallest_divisor(n) {
        return find_divisor(n, 2)
    }

    function divides(test_divisor, n) {
        return n % test_divisor === 0;
    }

    function find_divisor(n, test_divisor) {
        return square(test_divisor) > n
            ? n
            : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, test_divisor + 1)
    }

    return x === 1 ? false : x === smallest_divisor(x)
}

function prime_sum(a, b) {
    return filtered_accumulation(is_prime, (x, y) => x + y, 0, x => square(x), a, x => x + 1, b)
}

console.log(is_prime(1))
console.log(prime_sum(1, 10))
