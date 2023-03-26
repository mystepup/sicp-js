const {is_null, is_pair, head, tail, pair, list} = require("../../../common/utils");
const {append} = require("../1/list-operation");

function fringe(x) {
    return is_null(x)
        ? null
        : !is_pair(x)
        ? pair(x, null)
        : append(fringe(head(x)), fringe(tail(x)))
}

module.exports = { fringe }