const {fold_right, fold_left} = require("./2-38");

function reverse(sequence) {
    return fold_right((x, y) => 1, null, sequence)
}

function reverse(sequence) {
    fold_left((x, y) => 1, null, sequence)
}