const {is_null} = require("../../common/utils");

function append(list1, list2) {
    return is_null(list1)
        ? list2
        : pair(head(list1), append(tail(list1), list2))
}

function append_mutator(x, y) {
    set_tail(last_pair(x), y)
    return x
}

function last_pair(x) {
    return is_null(tail(x))
        ? x
        : last_pair(tail(x))
}

const x = list("a", "b") // ["a", ["b", null]]
const y = list("c", "d") // ["c", ["d", null]]
const z = append(x, y)
z;
["a", ["b", ["c", ["d", null]]]]

tail(x)
["b", null]

const w = append_mutator(x, y)
w;
["a", ["b", ["c", ["d", null]]]]

tail(x);
["b", ["c", ["d", null]]];