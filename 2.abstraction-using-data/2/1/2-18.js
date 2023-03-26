const {is_null, tail, head, pair} = require("../../../common/utils");

function reverse(items) {
    function iter(items, reversed) {
        return is_null(items)
            ? reversed
            : iter(tail(items), pair(head(items), reversed))
    }
    return iter(items, null)
}

module.exports = { reverse }