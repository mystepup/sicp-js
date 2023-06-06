const {add_streams, stream_map_2, scale_stream} = require("./infinite-stream");
const {head, pair} = require("../../../common/utils");
const {stream_tail, display_stream_interval} = require("../stream");
const {mul_streams} = require("./3-54");

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

function integrate_series(stream) {
    return stream_map_2((x1, x2) => x1 / x2, stream, integers)
}

const minus_one = pair(-1, () => minus_one)
const cosine_series = pair(1, () => integrate_series(mul_streams(minus_one, sine_series)))
const sine_series = pair(0, () => integrate_series(cosine_series))

// function mul_series(s1, s2) {
//     return pair(head(s1) * head(s2), () => add_streams(
//         mul_series(s1, stream_tail(s2)),
//         mul_series(stream_tail(s1), s2)
//     ))
// }

function mul_series(s1, s2) {
    return pair(head(s1) * head(s2),
        () => add_streams(
            mul_series(stream_tail(s1), s2),
            scale_stream(stream_tail(s2), head(s1))));
}



// const result = add_streams(mul_series(cosine_series, cosine_series), mul_series(sine_series, sine_series))
// display_stream_interval(result, 5)

module.exports = { mul_series }