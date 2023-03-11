const {pair, head, tail, display} = require("../../../common/utils");

function make_point(x, y) {
    return pair(x, y)
}

function x_point(x) {
    return head(x)
}

function y_point(x) {
    return tail(x)
}

function make_segment(a, b) {
    return pair(a, b)
}

function start_segment(a) {
    return head(a)
}

function end_segment(b) {
    return tail(b)
}

function midpoint_segment(s) {
    const x = x_point(start_segment(s)) + x_point(end_segment(s))
    const y = y_point(start_segment(s)) + y_point(end_segment(s))
    return make_point(x / 2, y / 2)
}

function print_point(p) {
    return display("(" + JSON.stringify(x_point(p)) + ", " + JSON.stringify(y_point(p)) + ")")
}

const a = make_point(1, 2)
const b = make_point(3, 4)
const s = make_segment(a, b)
const midpoint = midpoint_segment(s)
print_point(midpoint)