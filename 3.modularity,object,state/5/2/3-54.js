const {stream_map_2, add_streams} = require("./infinite-stream");
const {pair} = require("../../../common/utils");
const {stream_tail, display_stream_interval, stream_ref} = require("../stream");

function mul_streams(s1, s2) {
    return stream_map_2((x1, x2) => x1 * x2, s1, s2)
}

const one = pair(1, () => one)

const integers = pair(1, () => add_streams(one, integers))
//
const factorials = pair(1, () => mul_streams(factorials, stream_tail(integers)));

// display_stream_interval(factorials, 5)

// console.log(stream_ref(factorials, 5))

module.exports = { mul_streams }