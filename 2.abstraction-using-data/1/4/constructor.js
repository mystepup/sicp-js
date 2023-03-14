const { pair, head, tail } = require('./pair')
const {abs} = require("../../../common/utils");

function make_interval(x, y) {
    return pair(x, y)
}

function upper_bound(i) {
    return head(i)
}

function lower_bound(i) {
    return tail(i)
}

function make_center_width(c, w) {
    return make_interval(c - w, c + w)
}

function make_center_percent(c, t) {
    const w = abs(c * t / 100)
    return make_interval(c - w, c + w)
}

function percent(i) {
    const c = center(i)
    const w = width(i)
    return (w / c) * 100
}

function center(i) {
    return (upper_bound(i) + lower_bound(i)) / 2
}

function width(i) {
    return (upper_bound(i) - lower_bound(i)) / 2
}

module.exports = { make_interval, upper_bound, lower_bound, make_center_width,
    make_center_percent, center, width, percent }