const {is_null, head, tail, pair} = require("../../../common/utils");


function list_ref(items, n) {
    return n === 0
        ? head(items)
        : list_ref(tail(items), n - 1)
}
// function length(items) {
//     return is_null(items)
//         ? 0
//         : 1 + length(tail(items))
// }

function length(items) {
    function iter(list, len) {
        return  is_null(list) ? len : iter(tail(list), len + 1)
    }
    return iter(items, 0)
}

function append(list1, list2) {
    return is_null(list1)
        ? list2
        : pair(head(list1), append(tail(list1), list2))
}

// function scale_list(items, factor) {
//     return is_null(items)
//         ? null
//         : pair(head(items) * factor,
//             scale_list(tail(items), factor))
// }

function scale_list(items, factor) {
    return map(x => x * factor, items)
}

function map(fun, items) {
    return is_null(items)
        ? null
        : pair(fun(head(items)),
            map(fun, tail(items)))
}

module.exports = { list_ref, length, append, scale_list, map }