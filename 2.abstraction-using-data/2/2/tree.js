const {is_null, head, tail, is_pair} = require("../../../common/utils");

function count_leaves(x) {
    return is_null(x)
        ? 0
        : !is_pair(x)
        ? 1
        : count_leaves(head(x)) + count_leaves(tail(x))
}

module.exports = { count_leaves }