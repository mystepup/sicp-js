const { abs, display, average } = require("../../../common/utils");

const tolerance = 0.00001;
function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance
    }
    function try_with(guess) {
        const next = f(guess)
        display(next)
        return close_enough(guess, next)
            ? next
            : try_with(next)
    }
    return try_with(first_guess);
}

function log(x) {
    return Math.log(1000) / Math.log(x)
}

function average_damping_log(x) {
    return average(x, log(x))
}

console.log(fixed_point(log, 2))
console.log('hihihi')
console.log(fixed_point(average_damping_log, 2))