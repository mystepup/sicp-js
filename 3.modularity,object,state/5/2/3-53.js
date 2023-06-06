const {pair} = require("../../../common/utils");
const {add_streams} = require("./infinite-stream");
const {stream_tail, display_stream_interval} = require("../stream");

const s = pair(1, () => add_streams(s, s))

display_stream_interval(s, 5)