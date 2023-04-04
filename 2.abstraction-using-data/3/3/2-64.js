const {head, is_null, tail, pair, list, display_list} = require("../../../common/utils");
const {make_tree, left_branch, right_branch} = require("./binary-tree");

function length(item) {
    return is_null(item)
        ? 0
        : 1 + length(tail(item))
}

function list_to_tree(elements) {
    return head(partial_tree(elements, length(elements)))
}

// 정수 n과 크기가 n 이상인 목록을 받고 그 목록의 처음 n개의 요소를 담은 균형 이진 트리를 생성한다.
/**
 * 왼쪽 트리의 사이즈를 구한다. left_size
 * elts로 left_size만큼 트리를 만들고, 남은 elts와 같이 반환한다. left_result
 * left_result의 head가 left_tree
 * tail, tree가 되지 않은 elts, 즉 non_left_elts의 head가 entry가 된다.
 * right_size를 구하고 그 크기만큼 right_tree를 구하고, 남은 non_left_elts를 반환한다 right_result
 * right_result의 head가 right_tree
 * 여태까지 구한 entry, left_tree, right_tree로 트리를 만들고, right_tree를 만들고 남은 elts를 같이 반환한다.
 */
function partial_tree(elts, n) {
    if (n === 0) {
        return pair(null, elts)
    } else {
        const left_size = Math.floor((n - 1) / 2)
        const left_result = partial_tree(elts, left_size)
        const left_tree = head(left_result)
        const non_left_elts = tail(left_result)

        const right_size = n - (left_size + 1)
        const this_entry = head(non_left_elts)
        const right_result = partial_tree(tail(non_left_elts), right_size)
        const right_tree = head(right_result)

        const remaining_elts = tail(right_result)
        return pair(make_tree(this_entry, left_tree, right_tree), remaining_elts)
    }
}

display_list(list_to_tree(list(1, 3, 5, 7, 9, 11)))

display_list(left_branch(list_to_tree(list(1, 3, 5, 7, 9, 11))))
display_list(left_branch(left_branch(list_to_tree(list(1, 3, 5, 7, 9, 11)))))
display_list(right_branch(left_branch(list_to_tree(list(1, 3, 5, 7, 9, 11)))))

display_list(right_branch(list_to_tree(list(1, 3, 5, 7, 9, 11))))
display_list(left_branch(right_branch(list_to_tree(list(1, 3, 5, 7, 9, 11)))))
display_list(right_branch(right_branch(list_to_tree(list(1, 3, 5, 7, 9, 11)))))


// O(n)