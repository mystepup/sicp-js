const {stream_map, stream_enumerate_interval, stream_filter, stream_ref, display_stream} = require("../stream");
const {is_even} = require("../../../common/utils");
let sum = 0;
function accum(x) {
    sum = x + sum
    return sum
}

const seq = stream_map(accum, stream_enumerate_interval(1, 20))
// sequence: pair(1, () => stream_enumerate_interval(2, 20))
// seq: pair(1, () => stream_map(accum, pair(2, () => stream_enumerate_interval(3, 20))))
// sum: 1
const y = stream_filter(is_even, seq)
// seq: pair(1, () => stream_map(accum, pair(2, () => stream_enumerate_interval(3, 20))))
// stream_filter(is_even, stream_tail(seq))

// seq: pair(3, () => stream_map(accum, pair(3, () => stream_enumerate_interval(4, 20))))
// stream_filter(is_even, stream_tail(seq))

// seq: pair(6, () => stream_map(accum, pair(4, () => stream_enumerate_interval(5, 20))))
// pair(6, () => stream_filter(is_even, stream_tail(seq)))
// sum: 6
console.log("after y sum is: ", sum)
console.log(y, seq)

const z = stream_filter(x => x % 5 === 0, seq)
// seq: pair(1, () => stream_map(accum, pair(2, () => stream_enumerate_interval(3, 20))))
// seq: pair(8, () => stream_map(accum, pair(3, () => stream_enumerate_interval(4, 20))))
// seq: pair(11, () => stream_map(accum, pair(4, () => stream_enumerate_interval(5, 20))))
// pair(15, () => stream_filter(pred, stream_tail(seq)))
console.log("after z sum is: ", sum)
console.log(z)

console.log('stream_ref')
stream_ref(y, 7)
console.log('sum is ', sum)

console.log('display_stream')
display_stream(z)
console.log('sum is ', sum)