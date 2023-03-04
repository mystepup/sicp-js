const { average, abs } = require('../../common/utils');

function close_enough(x, y) {
    return abs(x - y) < 0.0001
}

function half_interval_method(f, a, b) {
    const a_value = f(a);
    const b_value = f(b);
    return negative(a_value) && positive(b_value) ? search(f, a, b)
        : negative(b_value) && positive(a_value) ? search(f, b, a)
        : error("values are not of opposite sign");
}

function search(f, neg_point, pos_point) {
    const midpoint = average(neg_point, pos_point)
    if (close_enough(neg_point, pos_point)) {
        return midpoint
    } else {
        const test_value = f(midpoint);
        return positive(test_value) ? search(f, neg_point, midpoint)
            : negative(test_value)
            ? search(f, midpoint, pos_point)
            : midpoint
    }
}