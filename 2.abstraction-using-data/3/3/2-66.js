const {entry, left_branch, right_branch} = require("./binary-tree");
const {is_null} = require("../../../common/utils");

function lookup(given_key, tree_record) {
    if (is_null(tree_record)) {
        return null
    }
    if (key(entry(tree_record)) === given_key) {
        return entry(tree_record)
    } else if (key(entry(tree_record)) > given_key) {
        return lookup(given_key, left_branch(tree_record))
    } else {
        return lookup(given_key, right_branch(tree_record))
    }
}