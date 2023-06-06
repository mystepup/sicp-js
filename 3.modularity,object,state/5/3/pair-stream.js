const {pair, list, head, is_null} = require("../../../common/utils");
const {stream_map, stream_tail, display_stream_interval} = require("../stream");
const {add_streams} = require("../2/infinite-stream");

function pairs(s, t) {
    return pair(list(head(s), head(t)),
        () => interleave(stream_map(x => list(head(s), x),
                stream_tail(t)),
            pairs(stream_tail(s),
                stream_tail(t))));
}

function interleave(s1, s2) {
    return is_null(s1)
        ? s2
        : pair(head(s1),
            () => interleave(s2, stream_tail(s1)))
}

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

// display_stream_interval(pairs(integers, integers), 47)

module.exports = { pairs, interleave }