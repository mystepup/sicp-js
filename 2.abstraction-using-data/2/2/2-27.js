const {is_null, tail, pair, head, is_pair} = require("../../../common/utils");
const {append} = require("../1/list-operation");

// function deep_reverse(items) {
//     function iter(list, reversed) {
//         return is_null(list)
//             ? reversed
//             : is_pair(head(list))
//             ? iter(tail(list), pair(iter(head(list), null), reversed))
//             : iter(tail(list), pair(head(list), reversed))
//     }
//     return iter(items, null)
// }

function deep_reverse(items) {
    return is_null(items)
        ? null
        : is_pair(items)
        ? append(deep_reverse(tail(items)),
                pair(deep_reverse(head(items)),
                    null))
        : items
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