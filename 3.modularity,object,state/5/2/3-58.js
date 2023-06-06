const {pair} = require("../../../common/utils");
const {display_stream_interval} = require("../stream");

function expand(num, den, radix) {
    return pair(Math.trunc((num * radix) / den), () => expand((num * radix) % den, den, radix))
}

console.log("expand(1, 7, 10)")
display_stream_interval(expand(1, 7, 10),18)

console.log("expand(3, 8, 10)")
display_stream_interval(expand(3, 8, 10), 18)