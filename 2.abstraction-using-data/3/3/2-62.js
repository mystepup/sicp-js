const {is_null, head, tail, pair, list} = require("../../../common/utils");
const {append} = require("../../2/1/list-operation");

function union_set(set1, set2) {
    function iter(s1, s2, result) {
        if (is_null(s1)) {
            return append(result, s2)
        } else if (is_null(s2)) {
            return append(result, s1)
        }

        const x1 = head(s1)
        const x2 = head(s2)
        return x1 === x2
            ? iter(tail(s1), tail(s2), pair(x1, result))
            : x1 < x2
            ? iter(tail(s1), s2, pair(x1, result))
            : iter(s1, tail(s2), pair(x2, result))
    }
    return iter(set1, set2, null)
}

const set1 = list(1, 2, 3, 4, 5)
const set2 = list(0, 1, 3, 5, 7)

console.log(JSON.stringify(union_set(set1, set2)))