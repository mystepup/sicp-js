const {average, pair, head, abs} = require("../../../common/utils");
const {stream_map, stream_tail} = require("../stream");

function stream_limit(stream, tolerance) {
    const first = head(stream)
    const tail = stream_tail(stream)
    const second = head(tail)
    if (abs(first - second) < tolerance) {
        return second
    } else {
        return stream_limit(tail, tolerance)
    }
}


function sqrt_improve(guess, x) {
    return average(guess, x / guess)
}

function sqrt_stream(x) {
    return pair(1, () => stream_map(guess => sqrt_improve(guess, x),
        sqrt_stream(x)))
}
function sqrt(x, tolerance) {
    return stream_limit(sqrt_stream(x), tolerance)
}

// console.log(sqrt(2, 0.001))