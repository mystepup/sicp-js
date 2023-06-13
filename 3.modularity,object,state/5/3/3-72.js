const {head, square, tail, pair} = require("../../../common/utils");
const {weighted_pairs} = require("./3-70");
const {add_streams} = require("../2/infinite-stream");

function sum_of_squares(p) {
    return square(head(p)) + square(head(tail(p)))
}

const one = pair(1, () => one)
const integers = pair(1, () => add_streams(one, integers))

function ordered_pairs() {
    return weighted_pairs(integers, integers, sum_of_squares)
}

function equiv_sum_squares_stream(s) {

}