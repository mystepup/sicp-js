const {pair, average} = require("../../../common/utils");
const {stream_map, display_stream, display_stream_interval} = require("../stream");
const {scale_stream} = require("../2/infinite-stream");
const {partial_sums} = require("../2/3-55");
const {euler_transform, accelerated_sequence} = require("./sequence-accelerator");

function sqrt_improve(guess, x) {
    return average(guess, x / guess)
}

function sqrt_stream(x) {
    return pair(1, () => stream_map(guess => sqrt_improve(guess, x),
        sqrt_stream(x)))
}

// display_stream(sqrt_stream(2))

function  pi_summands(n) {
    return pair(1 / n, () => stream_map(x => - x, pi_summands(n + 2)))
}

const pi_stream = scale_stream(partial_sums(pi_summands(1)), 4)

display_stream(accelerated_sequence(euler_transform, pi_stream))