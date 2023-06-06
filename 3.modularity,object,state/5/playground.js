const {head} = require("../../common/utils");
const {stream_tail, stream_filter, stream_enumerate_interval} = require("./stream");
const {is_prime} = require("../../1.abstraction-using-function/find-divisor");



const a = head(stream_tail(stream_filter(
    is_prime,
    stream_enumerate_interval(10000, 1000000))))
console.log(a)
/**
 * 이 버전은 먼저 인수 10,000과 1,000,000으로 stream_enumerate_interval을 호출한다.
 *
 */
