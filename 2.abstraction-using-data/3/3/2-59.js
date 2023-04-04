const {is_null, pair, head, tail, list} = require("../../../common/utils");
const {is_element_of_set} = require("./set");
const {append} = require("../../2/1/list-operation");

// function union_set(set1, set2) {
//     function iter(s1, s2) {
//         return is_null(s1) || is_null(s2)
//             ? null
//             : is_element_of_set(head(s1), s2)
//                 ? iter(tail(s1), s2)
//                 : pair(head(s1), iter(tail(s1), s2))
//     }
//     return append(iter(set1, set2), set2)
// }

function union_set(set1, set2) {
    function iter(s1, result) {
        return is_null(s1)
            ? result
            : is_element_of_set(head(s1), set2)
            ? iter(tail(s1), result)
            : pair(head(s1), result)
    }
    return iter(set1, set2)
}

const set1 = list(1, 2, 3, 4)
const set2 = list(2, 3, 5, 6, 1)

console.log(JSON.stringify(union_set(set1, set2)))
