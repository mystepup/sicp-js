const { square } = require('../../../common/utils')
// function product(term, a, next, b) {
//     return a > b ? 1 : term(a) * product(term, next(a), next, b);
// }

function product(term, a, next, b) {
    function product_iterative(a, result) {
        return a > b ? result : product_iterative(next(a), result * term(a))
    }
    return product_iterative(a, 1)
}

function factorial(n) {
    return product(x => x, 1, x => x + 1, n);
}

console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(0))

function approximate_pi(n) {
    function next(x) {
        return x + 1;
    }
    function numerator(x) {
        return x === 1
            ? 2
            : x === 2 * n
            ? 2 * (n + 1)
            :  (Math.floor(x / 2) + 1) * 2
    }
    function denominator(x) {
        return 2 * Math.ceil (x / 2) + 1
    }

    console.log(product(numerator, 1, next, n * 2))

    return 4 * product(numerator, 1, next, n * 2) / product(denominator, 1, next, n * 2)
}

console.log(approximate_pi(84))