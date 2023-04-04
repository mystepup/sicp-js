const  {map}  = require("../1/list-operation");
const  {list, head, tail}  = require("../../../common/utils");
const  {enumerate_interval, filter}  = require("./conventional-interface");
const {flatmap} = require("./Nestsed-Mapping");
const {is_prime} = require("../../../1.abstraction-using-function/find-divisor");

function unique_pairs(n) {
    return flatmap(i => map(j => list(i, j),
            enumerate_interval(1, i - 1)),
        enumerate_interval(1, n))
}

function is_prime_sum(pair) {
    return is_prime(head(pair) + head(tail(pair)));
}

function make_pair_sum(pair) {
    return list(head(pair), head(tail(pair)), head(pair) + head(tail(pair)))
}

function prime_sum_pairs(n) {
    return map(make_pair_sum, filter(is_prime_sum, unique_pairs(n)))
}

console.log(JSON.stringify(unique_pairs(6)))
console.log(JSON.stringify(prime_sum_pairs(6)))