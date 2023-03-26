const {list, head, tail, pair, is_null} = require("../../../common/utils");

/**
 * branch가 2개인 mobile을 이진 모빌
 * 하나의 이진 모빌은 왼쪽 가지와 오른쪽 가지로 구성
 * 각 가지는 특정 길이의 막대
 * 막대 끝에는 하나의 추 또는 또 다른 이진 모빌이 달려있다.
 */
function make_mobile(left, right) {
    return list(left, right)
}

function make_branch(length, structure) {
    return list(length, structure)
}

function left_branch(m) {
    return head(m)
}

function right_branch(m) {
    return head(tail(m))
}

function branch_length(b) {
    return head(b)
}

function branch_structure(b) {
    return head(tail(b))
}

function is_number(x) {
    return typeof x === 'number';
}

function is_weight(x) {
    return is_number(x)
}

function total_weight(x) {
    return is_weight(x)
        ? x
        : total_weight(branch_structure(
            left_branch(x)
        )) + total_weight(branch_structure(
            right_branch(x)
        ))
}

function is_balanced(m) {

}

// function make_mobile(left, right) {
//     return pair(left, right)
// }
//
// function make_branch(length, structure) {
//     return pair(length, structure)
// }