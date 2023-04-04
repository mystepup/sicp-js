const {is_null, head, tail} = require("../../../common/utils");

function is_element_of_set(x, set) {
    return is_null(set)
        ? false
        : x === head(set)
        ? true
        : x < head(set)
        ? false
        : is_element_of_set(x, tail(set));
}


function intersection_set(set1, set2) {
    if (is_null(set1) || is_null(set2)) {
        return null;
    } else {
        const x1 = head(set1);
        const x2 = head(set2);
        return x1 === x2
            ? pair(x1, intersection_set(tail(set1), tail(set2)))
            : x1 < x2
            ? intersection_set(tail(set1), set2)
            : intersection_set(set1, tail(set2));
    }
}

module.exports = {is_element_of_set, intersection_set}