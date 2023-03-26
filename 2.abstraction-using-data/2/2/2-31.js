const {map} = require("../1/list-operation");
const {is_pair, is_null} = require("../../../common/utils");

function tree_map(f, tree) {
    return map(sub_tree => is_null(sub_tree)
            ? null
            : is_pair(sub_tree)
            ? tree_map(f, sub_tree)
            : f(sub_tree),
            tree);
}