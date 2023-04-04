const {make_segment} = require("./2-48");
const {make_vect, segments_to_painter} = require("./frame");
const {list} = require("../../../common/utils");

function border_painter() {
    const top = make_segment(make_vect(0, 1), make_vect(1, 1))
    const right = make_segment(make_vect(1, 1), make_vect(1, 0))
    const bottom = make_segment(make_vect(1, 0), make_vect(0, 0))
    const left = make_segment(make_vect(0, 0), make_vect(0, 1))
    return segments_to_painter(list(top, right, bottom, left))
}

function x_painter() {
    const lb_rt = make_segment(make_vect(0, 0), make_vect(1, 1))
    const rb_lt = make_segment(make_vect(1, 0), make_vect(0, 1))
    return segments_to_painter(list(lb_rt, rb_lt))
}

function diamond_painter() {
    const tl = make_segment(make_vect(0, 0.5), make_vect(0.5, 1))
    const tr = make_segment(make_vect(0.5, 1), make_vect(1, 0.5))
    const br = make_segment(make_vect(1, 0.5), make_vect(0, 0.5))
    const bl = make_segment(make_vect(0, 0.5), make_vect(0, 0.5))
    return segments_to_painter(tl, tr, br, bl)
}

function wave_painter() {

}