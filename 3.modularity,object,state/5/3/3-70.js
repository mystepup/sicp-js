const {is_null, list, pair, head, tail} = require("../../../common/utils");
const {stream_tail, stream_map, display_stream_interval} = require("../stream");
const {add_streams} = require("../2/infinite-stream");


function merge_weighted(s1, s2, weight) {
    if (is_null(s1)) {
        return s2
    } else if (is_null(s2)) {
        return s1
    } else {
        const s1head = head(s1)
        const s2head = head(s2)
        return weight(s1head) <= weight(s2head)
            ? pair(s1head, () => merge_weighted(stream_tail(s1), s2, weight))
            : pair(s2head, () => merge_weighted(s1, stream_tail(s2), weight))

    }
}

function weighted_pairs(s1, s2, weight) {
    return pair(list(head(s1), head(s2)),
        () => merge_weighted(stream_map(x => list(head(s1), x), stream_tail(s2)),
        weighted_pairs(stream_tail(s1), stream_tail(s2), weight),
        weight))
}

function sum_weight(p) {
    return head(p) + head(tail(p))
}

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

// const ordered_pairs = weighted_pairs(integers, integers, sum_weight)
// display_stream_interval(ordered_pairs, 20)

module.exports = { weighted_pairs }