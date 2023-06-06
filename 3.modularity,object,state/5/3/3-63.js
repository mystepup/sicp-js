const {pair} = require("../../../common/utils");
const {memo, stream_map} = require("../stream");

function sqrt_stream_optimized(x) {
    return pair(1, memo(() => stream_map(guess => sqrt_improve(guess, x),
        sqrt_stream_optimized(x))))
}

function sqrt_stream_optimized_2(x) {
    const guesses = pair(1, memo(() => stream_map(guess => sqrt_improve(guess, x), guesses)))
    return guesses
}