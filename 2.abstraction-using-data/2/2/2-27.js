const {is_null, tail, pair, head, is_pair} = require("../../../common/utils");

function deep_reverse(items) {
}

function reverse(items) {
    function iter(list, reversed) {
        return is_null(list)
            ? reversed
            : iter(tail(list), pair(head(list), reversed))
    }
    return iter(items, null)
}

module.exports = { deep_reverse }