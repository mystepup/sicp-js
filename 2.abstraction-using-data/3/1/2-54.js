// 만일 a와 b가 둘 다 수치이거나 둘 다 문자열이고 ===가 참이면 둘은 상등이고
// 만일 둘 다 쌍 객체이고 head(a)와 head(b)가 상등이며 tail(a)와 tail(b)가 상등이면 둘은 상등이다.

const {is_number, is_string, is_pair, head, tail, list, is_null} = require("../../../common/utils");

function equal(a, b) {
    if (is_null(a) && is_null(b)) {
        return true
    } else if (is_null(a) && !is_null(b)) {
        return false
    } else if (!is_null(a) && is_null(b)) {
        return false
    }
    return is_number(a) && is_number(b)
        ? a === b
        : is_string(a) && is_string(b)
        ? a === b
        : is_pair(a) && is_pair(b)
        ? equal(head(a), head(b)) && equal(tail(a), tail(b))
        : false
}

// console.log(equal(list("this", "is", "a", list("list")), list("this", "is", "a", list("list"))))