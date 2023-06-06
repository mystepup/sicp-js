const {pair, head} = require("../../../common/utils");
const {add_streams} = require("./infinite-stream");
const {stream_tail, display_stream_interval} = require("../stream");

function partial_sums(stream) {
    return pair(head(stream), () => add_streams(partial_sums(stream), stream_tail(stream)))
}

// const one = pair(1, () => one)
//
// const integers = pair(1, () => add_streams(one, integers))
//
// display_stream_interval(partial_sums(integers), 5)

module.exports = {partial_sums}