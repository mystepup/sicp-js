const {pair, head, is_null} = require("../../../common/utils");
const {stream_filter, stream_ref, stream_tail, stream_map} = require("../stream");

function integers_starting_from(n) {
    return pair(n, () => integers_starting_from(n + 1))
}

const integers = integers_starting_from(1)

function is_divisible(x, y) {
    return x % y === 0
}

const no_sevens = stream_filter(x => !is_divisible(x, 7), integers)

// stream_ref(no_sevens, 100)

function fibgen(a, b) {
    return pair(a, () => fibgen(b, a + b))
}

const fibs = fibgen(0, 1)

function sieve(stream) {
    return pair(head(stream), () => sieve(stream_filter(
        x => !is_divisible(x, head(stream)),
        stream_tail(stream)
    )))
}

const primes = sieve(integers_starting_from(2))
//
const ones = pair(1, () => ones)

function stream_map_2(f, s1, s2) {
    return is_null(s1) || is_null(s2)
        ? null
        : pair(f(head(s1), head(s2)), () => stream_map_2(f, stream_tail(s1), stream_tail(s2)))
}
function add_streams(s1, s2) {
    return stream_map_2((x1, x2) => x1 + x2, s1, s2)
}

const integers_2 = pair(1, () => add_streams(ones, integers_2))
//
const fibs_2 = pair(0, () => pair(1, () => add_streams(stream_tail(fibs_2), fibs_2)))

function scale_stream(stream, factor) {
    return stream_map(x => x * factor, stream)
}

const double = pair(1, () => scale_stream(double, 2))
//
const primes_2 = pair(2, () => stream_filter(is_prime, integers_starting_from(3)))

function is_prime(n) {
    function iter(ps) {
        return square(head(ps)) > n
            ? true
            : is_divisible(n, head(ps))
            ? false
            : iter(stream_tail(ps))
    }
    return iter(primes_2)
}

module.exports = { add_streams, stream_map_2, scale_stream }