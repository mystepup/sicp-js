const {pair, head, tail} = require("../../../common/utils");
const {for_each} = require("../1/2-23");

// ---------------Vector---------------
function make_vect(x, y) {
    return pair(x, y)
}

function xcor_vect(v) {
    return head(v)
}

function ycor_vect(v) {
    return tail(v)
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

// ---------------Segment---------------

function make_segment(v1, v2) {
    return pair(v1, v2)
}

function start_segment(s) {
    return head(s)
}

function end_segment(s) {
    return tail(s)
}

// ---------------Frame---------------

function make_frame(origin, edge1, edge2) {
    return pair(origin, pair(edge1, edge2))
}

function origin_frame(f) {
    return head(f)
}

function edge1_frame(f) {
    return head(tail(f))
}

function edge2_frame(f) {
    return tail(tail(f))
}

function frame_coord_map(frame) {
    return v => add_vect(origin_frame(frame),
        add_vect(scale_vect(xcor_vect(v), edge1_frame(frame)),
            scale_vect(ycor_vect(v), edge2_frame(frame))))
}

// ---------------Painter---------------

function segments_to_painter(segment_list) {
    return frame => for_each(segment =>
        draw_line(frame_coord_map(frame)(start_segment(segment)),
            frame_coord_map(frame)(end_segment(segment))), segment_list)
}

function transform_painter(painter, origin, corner1, corner2) {
    return frame => {
        const m = frame_coord_map(frame)
        const new_origin = m(origin)
        return painter(make_frame(
            new_origin,
            sub_vect(m(corner1), new_origin),
            sub_vect(m(corner2), new_origin)
        ))
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
    const paint_left = transform_painter(painter1, make_vect(0, 0),
        split_point, make_vect(0, 1))
    const paint_right = transform_painter(painter2, split_point,
        make_vect(1, 0), make_vect(0.5, 1))

    return frame => {
        paint_left(frame)
        paint_right(frame)
    }
}

function below(painter1, painter2) {
    const split_point = make_vect(0, 0.5)
    const paint_bottom = transform_painter(painter1, make_vect(0, 0),
        make_vect(1, 0), split_point)
    const paint_tom = transform_painter(painter2, split_point, make_vect(1, 0.5),
        make_vect(0, 1))

    return frame => {
        paint_bottom(frame)

    }

// ---------------Painting Operation (Abstraction)---------------

function right_split(painter, n) {
    if (n === 0) {
        return painter;
    } else {
        const smaller = right_split(painter, n - 1)
        return beside(painter, below(smaller, smaller))
    }
}

function corner_split(painter, n) {
    if (n === 0) {
        return painter;
    } else {
        const up = up_split(painter, n - 1)
        const right = right_split(painter, n - 1)
        const top_left = beside(up, up)
        const bottom_right = below(right, right)
        const corner = corner_split(painter, n - 1)
        return beside(below(painter, top_left),
            below(bottom_right, corner))
    }
}

function flipped_pairs(painter) {
    const painter2 = beside(painter, flip_vert(painter))
    return below(painter2, painter2)
}

// ---------------Higher Painting Operation (Abstraction)---------------

function square_of_four(tl, tr, bl, br) {
    return painter => {
        const top = beside(tl(painter), tr(painter))
        const bottom = beside(bl(painter), br(painter))
        return below(bottm, top)
    }
}