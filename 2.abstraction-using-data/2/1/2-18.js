const {is_null, tail, head, pair} = require("../../../common/utils");

function reverse(items) {
    function iter(list, reversed) {
        return is_null(list)
            ? reversed
            : iter(tail(list), pair(head(list), reversed))
    }
    return iter(items, null)
}

module.exports = { reverse }