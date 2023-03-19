const {is_null, tail, pair, square, head} = require("../../../common/utils");

function square_list_bug_v1(items) {
    function iter(things, answer) {
        return is_null(things)
            ? answer
            : iter(tail(things),
                pair(square(head(things)),
                    answer))
    }
    return iter(items, null)
}

// square_list_bug_v1(list(1, 2, 3, 4))
// iter(list(1, 2, 3, 4), null)
// iter(list(2, 3, 4), pair(1, null))
// iter(list(3, 4), pair(4, pair(1, null)))

function square_list_bug_v2(items) {
    function iter(things, answer) {
        return is_null(things)
            ? answer
            : iter(tail(things),
                pair(answer,
                    square(head(things))))
    }
    return iter(items, null)
}

// square_list_bug_v1(list(1, 2, 3, 4))
// iter(list(1, 2, 3, 4), null)
// iter(list(2, 3, 4), pair(null, 1))
// iter(list(3, 4), pair(pair(null, 1), 4))

module.exports = { square_list_bug_v1,square_list_bug_v2 }