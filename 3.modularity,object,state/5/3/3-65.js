const {pair} = require("../../../common/utils");
const {stream_map, display_stream, display_stream_interval} = require("../stream");
const {partial_sums} = require("../2/3-55");
const {euler_transform, accelerated_sequence} = require("./sequence-accelerator");

function natural_logarithm_2_summands(n) {
    return pair(1 / n, () => stream_map(x => -x, natural_logarithm_2_summands(n + 1)))
}

const natural_logarithm_2_stream = partial_sums(natural_logarithm_2_summands(1)) //0.693

display_stream_interval(natural_logarithm_2_stream, 5)
display_stream_interval(euler_transform(natural_logarithm_2_stream), 5)
display_stream_interval(accelerated_sequence(euler_transform, natural_logarithm_2_stream), 5)