const {accumulate, filter, enumerate_interval} = require("./conventional-interface");
const {map, append} = require("../1/list-operation");
const {head, tail, list, is_null, pair} = require("../../../common/utils");
const {is_prime} = require("../../../1.abstraction-using-function/find-divisor");

function flatmap(f, seq) {
    return accumulate(append, null, map(f, seq))
}

function is_prime_sum(pair) {
    return is_prime(head(pair) + head(tail(pair)));
}

function make_pair_sum(pair) {
    return list(head(pair), head(tail(pair)), head(pair) + head(tail(pair)))
}

function prime_sum_pairs(n) {
    return map(make_pair_sum,
        filter(is_prime_sum,
            flatmap(i => map(j => list(i, j),
                enumerate_interval(1, i - 1)),
                enumerate_interval(1, n))))
}

const primesum = prime_sum_pairs(6)
// console.log(JSON.stringify(primesum))

function permutation(s) {
    return is_null(s)
        ? list(null)
        : flatmap(x => map(p => pair(x, p),
            permutation(remove(x, s))), s)
}

function remove(item, sequence) {
    return filter(x => x !== item, sequence)
}

// console.log(JSON.stringify(permutation(list(1, 2, 3))))

module.exports = { flatmap }