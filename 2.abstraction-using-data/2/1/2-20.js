const {is_null, head, tail} = require("../../../common/utils");

function plus(x, y) {
    return x + y
}

function plus_curried(x) {
    return y => x + y
}

function brooks(func, items) {
    return is_null(tail(items))
        ? func(head(items))
        : brooks(func(head(items)), tail(items))
}

function brooks_curried(x) {
    return brooks(head(x), tail(x))
}

module.exports = { plus_curried, brooks, brooks_curried }