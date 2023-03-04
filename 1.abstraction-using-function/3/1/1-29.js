const { sum, cube, is_even} = require('../../../common/utils')

// Simpson's Rule
function simpson_rule(f, a, b, n) {
    const h = (b - a) / n

    function term(k) {
        const coefficient = k === 0 || k === n ? 1 : is_even(k) ? 2: 4;
        return coefficient * f(a + k * h)
    }
    function next(k) {
        return k + 1;
    }

    return (h / 3) * sum(term, 0, next, n)
}

console.log(simpson_rule(cube, 0, 1, 1000))