const {head, tail, pair, list} = require("../../../common/utils");
const {stream_tail, display_stream_interval} = require("../stream");
const {add_streams} = require("../2/infinite-stream");
const {weighted_pairs} = require("./3-70");

function ramanujan(s) {
    const head_of_stream_tail = (s) => head(stream_tail(s))
    const stream_tail_of_stream_tail = (s) => stream_tail(stream_tail(s))
    let scar = head(s)
    let scadr = head_of_stream_tail(s)

    if (sum_triple(scar) === sum_triple(scadr)) {
        return pair(list(sum_triple(scar), scar, scadr), () => ramanujan(stream_tail_of_stream_tail(s)))
    }
    return ramanujan(stream_tail(s))
}


function triple(x) {
    return x * x * x;
}
function sum_triple(x) {
    return triple(head(x)) + triple(head(tail(x)))
}

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

const ramanujan_numbers = ramanujan(weighted_pairs(integers, integers, sum_triple))

display_stream_interval(ramanujan_numbers, 10)