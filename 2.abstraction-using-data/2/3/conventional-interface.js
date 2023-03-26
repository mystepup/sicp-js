const {is_null, is_pair, is_odd, square, head, tail, is_even, pair, list} = require("../../../common/utils");
const {append, map} = require("../1/list-operation");

function sum_odd_squares(tree) {
    return is_null(tree)
        ? 0
        : !is_pair(tree)
        ? is_odd(tree) ? square(tree) : 0
        : sum_odd_squares(head(tree)) + sum_odd_squares(tail(tree));
}

function even_fibs(n) {
    function next(k) {
        if (k > n) {
            return null
        } else {
            const f = fib(k)
            return is_even(f)
                ? pair(f, next(k + 1))
                : next(k + 1)
        }
    }
    next(0)
}

function filter(predicate, sequence) {
    return is_null(sequence)
        ? null
        : predicate(head(sequence))
        ? pair(head(sequence),
                filter(predicate, tail(sequence)))
        : filter(predicate, tail(sequence))
}

function accumulate(op, initial, sequence) {
    return is_null(sequence)
        ? initial
        : op(head(sequence),
            accumulate(op, initial, tail(sequence)))
}

function enumerate_interval(low, high) {
    return low > high
        ? null
        : pair(low, enumerate_interval(low + 1, high))
}

function enumerate_tree(tree) {
    return is_null(tree)
        ? null
        : !is_pair(tree)
        ? list(tree)
        : append(enumerate_tree(head(tree)),
                enumerate_tree(tail(tree)))
}

function sum_odd_squares_improved(tree) {
    return accumulate((x, y) => x + y,
    0,
                map(x => x * x,
                    filter(is_odd,
                        enumerate_tree(tree))))
}

function even_fibs_improved(n) {
    return accumulate(pair,
                null,
                            filter(is_even,
                                map(fib,
                                    enumerate_interval(0, n))))
}

module.exports = { accumulate }