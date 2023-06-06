const {stream_enumerate_interval, stream_map, stream_ref, stream_map_optimized} = require("../stream");
let x = stream_map(console.log, stream_enumerate_interval(0, 10))
stream_ref(x, 5)
stream_ref(x, 7)

console.log('-----')

let y = stream_map_optimized(console.log, stream_enumerate_interval(0, 10))
stream_ref(y, 5)
stream_ref(y, 7)