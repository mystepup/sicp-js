const {is_null, head, tail} = require("../../../common/utils");

function for_each(func, items) {
    function iter(list) {
        if (!is_null(list)) {
        func(head(list))
        iter(tail(list))
    }
}
iter(items)
}

module.exports = { for_each }