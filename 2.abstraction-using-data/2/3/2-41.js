const {flatmap} = require("./Nestsed-Mapping");
const {map, append} = require("../1/list-operation");
const {list, pair, is_null, tail, head} = require("../../../common/utils");
const {enumerate_interval, filter} = require("./conventional-interface");
function unique_pairs(n) {
    return flatmap(i => map(j => list(i, j),
            enumerate_interval(1, i - 1)),
        enumerate_interval(1, n))
}

function triple(n) {
    return flatmap(i =>
            map(j => pair(i, j), unique_pairs(i - 1)),
        enumerate_interval(1, n))
}

function list_sum(t) {
    function iter(item, result) {
        return is_null(item)
            ? result
            : iter(tail(item), result + head(item))
    }
    return iter(t, 0)
}
function tri_sum(n, s) {
    function is_triple_sum_same(t) {
        const sum = list_sum(t)
        return sum === s
    }

    return filter(is_triple_sum_same, triple(n))
}

console.log(JSON.stringify(tri_sum(10, 9)))