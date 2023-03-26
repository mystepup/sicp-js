const {is_null, is_pair, square, pair, head, tail} = require("../../../common/utils");
const {map} = require("../1/list-operation");

function square_tree(tree) {
    return is_null(tree)
        ? null
        : !is_pair(tree)
        ? square(tree)
        : pair(square_tree(head(tree)), square_tree(tail(tree)))
}

function square_tree_map(tree) {
    return map(sub_tree => is_pair(sub_tree)
        ? square_tree_map(sub_tree)
        : sub_tree  * sub_tree
        , tree)
}
