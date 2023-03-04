const { abs } = require('../../common/utils')

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

console.log(fixed_point(Math.cos, 1))