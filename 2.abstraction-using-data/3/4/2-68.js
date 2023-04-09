const {is_null, head, tail, list, pair, display_list} = require("../../../common/utils");
const {append} = require("../../2/1/list-operation");
const {make_code_tree, make_leaf, is_leaf, symbol_leaf, symbols} = require("./huffman-tree");
const {left_branch, right_branch} = require("../3/binary-tree");

/**
 * @param message 메시지
 * @param tree 허프먼 트리
 * @returns 허프먼 트리로 메시지를 부화해서 만든 비트열
 */
function encode(message, tree) {
    return is_null(message)
        ? null
        : append(encode_symbol(head(message), tree),
            encode(tail(message), tree))
}

function member(x, set) {
    return is_null(set)
        ? null
        : x === head(set)
        ? set
        : member(x, tail(set))
}

function encode_symbol(symbol, tree) {
    function contains_symbol(symbol, current_tree) {
        return !is_null(member(symbol, symbols(current_tree)))
    }
    if (is_leaf(tree)) {
        return null;
    } else {
        const left_tree = left_branch(tree)
        const right_tree = right_branch(tree)
        return contains_symbol(symbol, left_tree)
            ? pair(0, encode_symbol(symbol, left_tree))
            : contains_symbol(symbol, right_tree)
            ? pair(1, encode_symbol(symbol, right_tree))
            : new Error("symbol not found -- encoded symbol")
    }
}

const lists = list("A", "D", "A", "B", "B", "C", "A")

const sample_tree = make_code_tree(make_leaf("A", 4),
    make_code_tree(make_leaf("B", 2),
        make_code_tree(
            make_leaf("D", 1),
            make_leaf("C", 1)
        )));

// display_list(encode(lists, sample_tree))
//
// const sample_message = list(0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0)

module.exports = {encode}