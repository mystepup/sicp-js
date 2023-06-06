const {mul_series} = require("./3-60");
const {invert_unit_series} = require("./3-61");
const {pair, head} = require("../../../common/utils");
const {mul_streams} = require("./3-54");
const {stream_map, display_stream_interval} = require("../stream");
const {add_streams, stream_map_2} = require("./infinite-stream");

function div_series(s1, s2) {
    if (head(s2) === 0) {
        console.error("Zero Divider")
    } else {
        return mul_series(s1, invert_unit_series(s2))
    }
}

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

function integrate_series(stream) {
    return stream_map_2((x1, x2) => x1 / x2, stream, integers)
}

const cosine_series = pair(1, () => integrate_series(stream_map(x => -x, sine_series)))
const sine_series = pair(0, () => integrate_series(cosine_series))
const tan_series = div_series(sine_series, cosine_series)

display_stream_interval(tan_series, 10)