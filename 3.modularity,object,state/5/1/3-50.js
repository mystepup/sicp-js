const {is_null, head, pair} = require("../../../common/utils");
const {stream_tail, stream_enumerate_interval, memo} = require("../stream");

function stream_map_2(f, s1, s2) {
    return is_null(s1) || is_null(s2)
        ? null
        : pair(f(head(s1), head(s2)), () => stream_map_2(f, stream_tail(s1), stream_tail(s2)))
}

function stream_map_2_optimized(f, s1, s2) {
    return is_null(s1) || is_null(s2)
        ? null
        : pair(f(head(s1), head(s2)),
            memo(() => stream_map_2_optimized(f, stream_tail(s1), stream_tail(s2))))
}

// const s1 = stream_enumerate_interval(0, 10)
// const s2 = stream_enumerate_interval(-10, 0)
//
// const result = stream_map_2_optimized((a, b) => a + b, s1, s2)
// const streaTail = stream_tail(result)
// console.log(result)
// console.log(streaTail)

module.exports = { stream_map_2, stream_map_2_optimized }