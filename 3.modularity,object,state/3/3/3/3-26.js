import {equal, is_null, list, head, set_tail} from "../../../../common/utils";
import {entry, left_branch, right_branch} from "../../../../2.abstraction-using-data/3/3/binary-tree";

function insert(key, value, tree) {
    return is_null(tree)
        ? list(pair(key, value), null, null)
        : key === head(head(tree))
        ? set_tail(head(tree), value)
        : key < head(head(tree))
        ? list(head(tree), insert(key, value, left_branch(tree)), right_branch(tree))
        : list(head(tree), left_branch(tree), insert(key, value, right_branch(tree)))
}
function lookup(given_key, tree_record) {
    if (is_null(tree_record)) {
        return null
    }
    if (head(entry(tree_record)) === given_key) {
        return entry(tree_record)
    } else if (head(entry(tree_record)) > given_key) {
        return lookup(given_key, left_branch(tree_record))
    } else {
        return lookup(given_key, right_branch(tree_record))
    }
}
