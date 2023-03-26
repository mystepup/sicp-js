const {accumulate} = require("./conventional-interface");
const {map} = require("../1/list-operation");
const {is_pair} = require("../../../common/utils");

function count_leaves(t) {
    return accumulate((leaves, total) => leaves + total,
        0,
        map(sub_tree => is_pair(sub_tree)
        ? count_leaves(sub_tree) : 1, t))
}