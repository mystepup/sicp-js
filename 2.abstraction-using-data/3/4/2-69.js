const {make_leaf_set, adjoin_set, make_code_tree} = require("./huffman-tree");
const {list, display_list, is_null, tail, head} = require("../../../common/utils");

function length(items) {
    function iter(list, len) {
        return  is_null(list) ? len : iter(tail(list), len + 1)
    }
    return iter(items, 0)
}

/**
 * @param pairs 기호-도수 쌍들의 목록
 * @returns 허프먼 부호화 트리 생성
 */
/**
 * 도수가 가장 작은 두 기호를 더하여 tree를 만든다.
 * 그 트리를 순서 있는 목록 쌍 pairs에 추가한다.
 * 이를 반복한다.
 */
function generate_huffman_tree(pairs) {
    function successive_merge(ordered_pairs) {
        return length(ordered_pairs) === 1
            ? head(ordered_pairs)
            : successive_merge(
                adjoin_set(
                    make_code_tree(
                        head(ordered_pairs), head(tail(ordered_pairs))),
                    tail(tail(ordered_pairs))
                )
            )
    }

    return successive_merge(make_leaf_set(pairs))
}

// const lists = list(list("A", 4), list("B", 2), list("C", 1), list("D", 1))
//
// display_list(generate_huffman_tree(lists))

module.exports = {generate_huffman_tree}