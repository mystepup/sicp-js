const {accumulate} = require("./conventional-interface");
const {list, pair} = require("../../../common/utils");

function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y),
        null, sequence)
}

function append(seq1, seq2) {
    return accumulate(pair, seq2, seq1)
}

function length(sequence) {
    return accumulate((x, y) => 1 + y, 0, sequence)
}

module.exports = { map, append, length }

