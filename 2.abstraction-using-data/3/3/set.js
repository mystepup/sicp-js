const {is_null, head, tail} = require("../../../common/utils");

function equal(x, head) {
    return x === head;
}

function is_element_of_set(x, set) {
    return is_null(set)
        ? false
        : equal(x, head(set))
            ? true
            : is_element_of_set(x, tail(set));
}

function adjoin_set(x, set) {
    return is_element_of_set(x, set)
        ? set
        : pair(x, set);
}

function intersection_set(set1, set2) {
    return is_null(set1) || is_null(set2)
        ? null
        : is_element_of_set(head(set1), set2)
            ? pair(head(set1), intersection_set(tail(set1), set2))
            : intersection_set(tail(set1), set2);
}

module.exports = {is_element_of_set}