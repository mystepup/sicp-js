const { average, square } = require('../../../common/utils')
const { fixed_point } = require("../3/fixed-point");

function average_damp(f) {
    return x => average(x, f(x))
}

const dx = 0.00001;

function deriv(g) {
    return  x => (g(x + dx) - g(x)) / dx
}

function newton_transform(g) {
    return x => x - g(x) / deriv(g)(x)
}

function newton_method(g, guess) {
    return fixed_point(newton_transform(g), guess)
}

function sqrt(x) {
    return newton_method(y => square(y) - x, 1)
}

// console.log(sqrt(4))

module.exports = { newton_method }