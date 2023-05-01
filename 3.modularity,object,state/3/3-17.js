const {is_null, tail, head, pair, is_pair, list, display_list} = require("../../common/utils");
const {set_head} = require("./pair");
const {append} = require("../../2.abstraction-using-data/2/1/list-operation");
const {make_cycle} = require("./3-13");

// 순환 판단???

function count_pairs(p) {
    let visited = null

    function iter(items) {
        if (is_null(items) || !is_pair(items)) {
            return
        }
        if (is_null(visited) || !isVisited(visited, items)) {
            visited = pair(items, visited)
        }
        iter(head(items))
        iter(tail(items))
    }

    function isVisited(lst, item) {
        if (is_null(lst)) {
            return false
        } else if (head(lst) === item) {
            return true
        } else {
            return isVisited(tail(lst), item)
        }
    }

    function length(item) {
        return is_null(item)
            ? 0
            : 1 + length(tail(item))
    }

    function flatList(lst) {
        if (is_null(lst)) {
        } else {
            display_list(head(lst))
            flatList(tail(lst))
        }

    }

    iter(p);
    flatList(visited)
    return length(visited);
}

const x = list(1, 2)
const z = pair(x, tail(x))

const seven = list(1)
const l2 = pair(seven, seven)
const l1 = pair(l2, l2)

display_list(count_pairs(list(1, 2, 3)))
display_list(count_pairs(z))
display_list(count_pairs(l1))
display_list(count_pairs(make_cycle(list(1, 2, 3))))