const {list, head, tail, is_null, pair, display_list} = require("../../../common/utils");
const {append} = require("../../2/1/list-operation");

function make_leaf(symbol, weight) {
    return list("leaf", symbol, weight)
}

function is_leaf(object) {
    return head(object) === "leaf";
}

function symbol_leaf(x) {
    return head(tail(x))
}

function weight_leaf(x) {
    return head(tail(tail(x)))
}

function make_code_tree(left, right) {
    return list("code_tree", left, right,
        append(symbols(left), symbols(right)),
        weight(left) + weight(right))
}

function left_branch(tree) {
    return head(tail(tree))
}

function right_branch(tree) {
    return head(tail(tail(tree)))
}

function symbols(tree) {
    return is_leaf(tree)
        ? list(symbol_leaf(tree))
        : head(tail(tail(tail(tree))))
}

function weight(tree) {
    return is_leaf(tree)
        ? weight_leaf(tree)
        : head(tail(tail(tail(tail(tree)))))
}

function decode(bits, tree) {
    function decode_1(bits, current_branch) {
        if (is_null(bits)) {
            return null;
        } else {
            const next_branch = choose_branch(head(bits), current_branch)
            return is_leaf(next_branch)
                ? pair(symbol_leaf(next_branch), decode_1(tail(bits), tree))
                : decode_1(tail(bits), next_branch)
        }
    }
    return decode_1(bits, tree)
}

function choose_branch(bit, branch) {
    return bit === 0
        ? left_branch(branch)
        : bit === 1
        ? right_branch(branch)
        : new Error(`bad bit ${bit} -- choose branch`)
}

function adjoin_set(x, set) {
    return is_null(set)
        ? list(x)
        : weight(x) < weight(head(set))
        ? pair(x, set)
        : pair(head(set), adjoin_set(x, tail(set)))
}

function make_leaf_set(pairs) {
    if (is_null(pairs)) {
        return null
    } else {
        const first_pair = head(pairs)
        return adjoin_set(
            make_leaf(head(first_pair), head(tail(first_pair))),
            make_leaf_set(tail(pairs))
        )
    }
}

// const lists = list(list("A", 4), list("B", 2), list("C", 1), list("D", 1))
// display_list(make_leaf_set(lists))

module.exports = {make_code_tree, make_leaf, decode, is_leaf, symbol_leaf, symbols,
make_leaf_set, adjoin_set}