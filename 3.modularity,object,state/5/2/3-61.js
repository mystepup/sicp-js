const {mul_streams} = require("./3-54");
const {mul_series} = require("./3-60");
const {stream_tail, stream_map} = require("../stream");
const {pair} = require("../../../common/utils");

function invert_unit_series(stream) {
    return pair(1, () => stream_map(x => -x, mul_series(stream_tail(stream), invert_unit_series(stream))))
}

module.exports = { invert_unit_series }