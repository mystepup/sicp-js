const {pair, head, tail} = require("../../../common/utils");

function make_segment(v1, v2) {
    return pair(v1, v2)
}

function start_segment(s) {
    return head(s)
}

function end_segment(s) {
    return tail(s)
}