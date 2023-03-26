const {is_null, head, tail, is_pair} = require("../../../common/utils");
const {map} = require("../1/list-operation");

function count_leaves(x) {
    return is_null(x)
        ? 0
        : !is_pair(x)
        ? 1
        : count_leaves(head(x)) + count_leaves(tail(x))
}

function scale_tree(tree, factor) {
    return is_null(tree)
        ? null
        : !is_pair(tree)
        ? tree * factor
        : pair(scale_tree(head(tree), factor),
                scale_tree(tail(tree), factor))
}

function scale_tree_map(tree, factor) {
    return map(sub_tree => is_pair(sub_tree)
        ? scale_tree_map(sub_tree, factor)
        : sub_tree * factor
        , tree)
}

module.exports = { count_leaves }