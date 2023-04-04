const {is_null, head, tail, pair} = require("../../../common/utils");
const {start_segment, end_segment} = require("../../1/1/2-3");

function make_vect(x, y) {
    return [x, y]
}

function xcor_vect(v) {
    return v[0]
}

function ycor_vect(v) {
    return v[1]
}

function add_vect(a, b) {
    return make_vect(xcor_vect(a) + xcor_vect(b), ycor_vect(a) + ycor_vect(b))
}

function sub_vect(a, b) {
    return make_vect(xcor_vect(a) - xcor_vect(b), ycor_vect(a) - ycor_vect(b))
}

function scale_vect(s, v) {
    return make_vect(s * xcor_vect(v), s * ycor_vect(v))
}
function frame_coord_map(frame) {
    return v => add_vect(origin_frame(frame),
                    add_vect(scale_vect(xcor_vect(v), edge1_frame(frame)),
                                scale_vect(ycor_vect(v), edge2_frame(frame))))
}

function for_each(func, items) {
    function iter(list) {
        if (!is_null(list)) {
            func(head(list))
            iter(tail(list))
        }
    }
    iter(items)
}

function segments_to_painter(segment_list) {
    return frame => for_each(segment =>
                                draw_line(frame_coord_map(frame)(start_segment(segment)),
                                    frame_coord_map(frame)(end_segment(segment))), segment_list)
}

function make_frame(origin, edge1, edge2) {
    return pair(origin, pair(edge1, edge2))
}

function origin_frame(f) {
    return head(f)
}

function edge1_frame(f) {
    return head(tail(f))
}

function edge_frame(f) {
    return tail(tail(f))
}

function transform_painter(painter, origin, corner1, corner2) {
    return frame => {
        const m = frame_coord_map(frame);
        const new_origin = m(origin);
        return painter(make_frame(new_origin,
            sub_vect(m(corner1), new_origin),
            sub_vect(m(corner2), new_origin)))
    }
}

function flip_vert(painter) {
    return transform_painter(painter,
        make_vect(0, 1),
        make_vect(1, 1),
        make_vect(0, 0))
}

function beside(painter1, painter2) {
    const split_point = make_vect(0.5, 0)
    const paint_left = transform_painter(painter1,
        make_vect(0, 0), split_point, make_vect(0, 1))
    const paint_right = transform_painter(painter2,
        split_point, make_vect(1, 0), make_vect(0.5, 1))
}

module.exports = { make_vect, xcor_vect, ycor_vect, segments_to_painter, transform_painter }