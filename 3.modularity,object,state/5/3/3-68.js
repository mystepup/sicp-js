const {interleave} = require("./pair-stream");
const {stream_map, stream_tail, display_stream_interval} = require("../stream");
const {add_streams} = require("../2/infinite-stream");
const {list, pair, head} = require("../../../common/utils");

function pairs(s, t) {
    return interleave(stream_map(x => list(head(s), x),
            t),
        pair(stream_tail(s), stream_tail(t)));
}

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

const integer_pairs = pairs(integers, integers)

display_stream_interval(integer_pairs, 1)
console.log(JSON.stringify(integer_pairs))