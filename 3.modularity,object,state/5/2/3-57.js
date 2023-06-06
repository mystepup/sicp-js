const {pair} = require("../../../common/utils");
const {add_streams} = require("./infinite-stream");
const {stream_tail, display_stream_interval} = require("../stream");
const {stream_map_2_optimized} = require("../1/3-50");

const fib = pair(0, () => pair(1, () => add_streams(stream_tail(fib), fib)))

// display_stream_interval(fib, 10)

function add_stream_optimized(s1, s2) {
    return stream_map_2_optimized((x1, x2) => x1 + x2, s1, s2)
}

const fib_optimized = pair(0, () => pair(1, () => add_stream_optimized(stream_tail(fib), fib)))

display_stream_interval(fib_optimized, 10)