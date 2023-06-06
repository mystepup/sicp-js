const {pair} = require("../../../common/utils");
const {mul_streams} = require("./3-54");
const {stream_map_2, add_streams} = require("./infinite-stream");
const {display_stream_interval, stream_map} = require("../stream");

function divide_stream(s1, s2) {
    return stream_map_2((x1, x2) => x1 / x2, s1, s2)
}

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

const coefficient = stream_map(x => 1 / x, integers)

function integrate_series(stream) {
    return mul_streams(coefficient, stream)
}

const exp_series = pair(1, () => integrate_series(exp_series))

display_stream_interval(exp_series, 5)
const cosine_series = pair(1, () => integrate_series(stream_map(x => -x, sine_series)))
const sine_series = pair(0, () => integrate_series(cosine_series))