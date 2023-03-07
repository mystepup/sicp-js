const {fixed_point} = require("../3/fixed-point");
const {average} = require("../../../common/utils");

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

function fixed_point_of_transform(g, transform, guess) {
    return fixed_point(transform(g), guess);
}

function sqrt_v1(x) {
    return fixed_point_of_transform(y => y / x, average_damp, 1)
}

function sqrt_v2(x) {
    return fixed_point_of_transform(y => square(y) - x, newton_transform, 1)
}

