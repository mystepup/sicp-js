const {head, tail, is_null} = require("../../../common/utils");

function addend(s) {
    return head(tail(s))
}

function augend(s) {
    const rest = tail(tail(s))
    function iter(item) {
        return is_null(item)
            ? 0
            : make_sum(head(item), iter(tail(item)))
    }
    return iter(s)
}

function multiplier(s) {
    return head(tail(s))
}

function multiplicand(s) {
    function iter(item) {
        return is_null(item)
            ? 1
            : make_product(head(item), iter(tail(item)))
    }
    return iter(s)
}