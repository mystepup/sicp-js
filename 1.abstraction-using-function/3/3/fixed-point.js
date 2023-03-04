const { abs, average } = require('../../../common/utils')

const tolerance = 0.00001;

function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance
    }
    function try_with(guess) {
        const next = f(guess)
        return close_enough(guess, next)
            ? next
            : try_with(next)
    }
    return try_with(first_guess);
}

// console.log(fixed_point(Math.cos, 1))

function sqrt(x) {
    return fixed_point(y => x / y, 1)
}

function sqrt_modified(x) {
    return fixed_point(y => average(y, x / y), 1)
}

// console.log(sqrt(4))
// console.log(sqrt_modified(4))

module.exports = { fixed_point }