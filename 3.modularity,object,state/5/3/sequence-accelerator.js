const {stream_ref, memo, stream_tail, stream_map} = require("../stream");
const {pair, square, head} = require("../../../common/utils");

function euler_transform(s) {
    const s0 = stream_ref(s, 0)
    const s1 = stream_ref(s, 1)
    const s2 = stream_ref(s, 2)
    return pair(s2 - square(s2 - s1) / (s0 + (-2) * s1 + s2), memo(() => euler_transform(stream_tail(s))))
}

function make_tableau(transform, s) {
    return pair(s, () => make_tableau(transform, transform(s)))
}

function accelerated_sequence(transform, s) {
    return stream_map(head, make_tableau(transform, s))
}

module.exports = { euler_transform, make_tableau, accelerated_sequence }