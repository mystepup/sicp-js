// rectangle
// 직각인 두 선분

const {pair, head, tail} = require("../../../common/utils");

function make_point(x, y) {
    return pair(x, y)
}

function x_point(x) {
    return head(x)
}

function y_point(x) {
    return tail(x)
}


function start_segment(a) {
    return head(a)
}

function end_segment(b) {
    return tail(b)
}

// function make_rectV2(a, b, c, d) {
//     return pair(make_segment(a, b), make_segment(c, d))
// }

function make_rectV1(x, y) {
    return pair(x, y)
}

function width(r) {
    return head(r)
}

function height(r) {
    return tail(r)
}

function size(segment) {
    const start = start_segment(segment)
    const end = end_segment(segment)
    return Math.sqrt(Math.pow(x_point(start) - x_point(end), 2) - Math.pow(y_point(start) - y_point(end), 2))
}

function perimeter(r) {
    return (size(width(r)) + size(height(r))) * 2
}

function area(r) {
    return size(width(r)) * size(height(r))
}

module.exports = {start_segment, end_segment}