const {pair, list, head, square, tail} = require("../../../common/utils");
const {interleave, pairs} = require("./pair-stream");
const {stream_map, stream_tail, display_stream_interval, stream_filter, stream_ref} = require("../stream");
const {add_streams} = require("../2/infinite-stream");

function triples(s, t, u) {
    return pair(list(head(s), head(t), head(u)),
        () => interleave(stream_map(x => pair(head(s), x),
            stream_tail(pairs(t, u))), triples(stream_tail(s), stream_tail(t), stream_tail(u))))
}
// function first_of_integer_pair() {
//     return stream_map(head => pairs(integers, integers))
// }
//
// function triples(s, t, u) {
//     let pairs_tu = pairs(t, u)
//     function rec(si, i, ptu, top_i) {
//         return pair(pair(head(si), head(ptu)),
//             () => {
//                 if (head(top_i) === i) {
//                     return rec(s, 1, stream_tail(ptu), stream_tail(top_i))
//                 } else {
//                     return rec(stream_tail(si), i + 1, ptu, top_i)
//                 }
//             })
//     }
//     return rec(s, 1, pairs_tu, first_of_integer_pair)
// }

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

// const integer_triples = triples(integers, integers, integers)

// display_stream_interval(integer_triples, 20)

function pythagorean_triple() {
    const integer_triples = triples(integers, integers, integers)
    return stream_filter(x => square(head(tail(tail(x)))) === square(head(x)) + square(head(tail(x))), integer_triples)
}

const pythagorean_number = pythagorean_triple()
// display_stream_interval(pythagorean_number, 2)
console.log(stream_ref(pythagorean_number, 0))