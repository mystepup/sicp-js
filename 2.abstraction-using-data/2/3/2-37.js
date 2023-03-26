const {accumulate} = require("./conventional-interface");
const {plus, list, times} = require("../../../common/utils");
const {accumulate_n} = require("./2-36");
const {map} = require("../1/list-operation");

function dot_product(v, w) {
    return accumulate(plus, 0, accumulate_n(times, 1, list(v, w)))
}

function matrix_times_vector(m, v) {
    return map(x => dot_product(x, v), m)
}

function transpose(mat) {
    return accumulate_n(pair, null, mat)
}

function matrix_times_matrix(m, n) {
    const cols = transpose(n)
    return map(x => map(y => dot_product(x, y), cols), m)
}