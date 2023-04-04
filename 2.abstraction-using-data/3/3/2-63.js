// SICP JS 2.3.3

const {is_null, list, pair} = require("../../../common/utils");
const {append} = require("../../2/1/list-operation");
const {left_branch, entry, right_branch} = require("./binary-tree");

let list1 = 0;
//
function tree_to_list_1(tree) {
    list1++;
    return is_null(tree)
        ? null
        : append(tree_to_list_1(left_branch(tree)),
            pair(entry(tree),
                tree_to_list_1(right_branch(tree))));
}

let list2 = 0;
function tree_to_list_2(tree) {

    function copy_to_list(tree, result_list) {
        list2++;
        return is_null(tree)
            ? result_list
            : copy_to_list(left_branch(tree),
                pair(entry(tree),
                    copy_to_list(right_branch(tree),
                        result_list)));
    }
    return copy_to_list(tree, null);
}

const tree1 = list(7, list(3, list(1, null, null), list(5, null, null)), list(9, null, list(11, null, null)))
const tree2 = list(3, list(1, null, null), list(7, list(5, null, null), list(9, null, list(11, null, null))))
const tree3 = list(5, list(3, list(1, null, null), null), list(9, list(7, null, null), list(11, null, null)))
const tree4 = list(3, null, list(4, null, null))

// console.log(JSON.stringify(tree_to_list_1(tree1)))
// console.log(JSON.stringify(tree_to_list_2(tree1)))
// console.log('------------------------------------')
// console.log(JSON.stringify(tree_to_list_1(tree2)))
// console.log(JSON.stringify(tree_to_list_2(tree2)))
// console.log('------------------------------------')
// console.log(JSON.stringify(tree_to_list_1(tree3)))
// console.log(JSON.stringify(tree_to_list_2(tree3)))
// console.log('------------------------------------')
// console.log(JSON.stringify(tree_to_list_1(tree4)))
// console.log(JSON.stringify(tree_to_list_2(tree4)))

console.log(list1, list2)