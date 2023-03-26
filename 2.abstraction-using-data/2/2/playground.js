const {list, pair, head, tail, display_list} = require("../../../common/utils");
const {length} = require("../1/list-operation");
const {count_leaves} = require("./tree");
const {reverse} = require("../1/2-18");
const {deep_reverse} = require("./2-27");
const {fringe} = require("./2-28");
const {subsets} = require("./2-32");

const x = pair(list(1, 2), list(3, 4))
console.log(length(x))

console.log(count_leaves(x))

list(x, x)
list(list(list(1, 2), 3, 4), list(list(1, 2), 3, 4))

console.log(length(list(x, x)))

const list1 = list(1, 3, list(5, 7), 9)
console.log(head(tail(head(tail(tail(list1))))))

const list2 = list(list(7))
console.log(head(head(list2)))

const list3 = list(1, list(2, list(3, list(4, list(5, list(6, 7))))))

console.log(head(tail(head(tail(head(tail(head(tail(head(tail(head(tail(list3)))))))))))))

const y = list(list(1, 2), list(3, 4), list(5, 6, 7))

display_list(reverse(y))

display_list(deep_reverse(y))

const tree = list(list(1, 2), list(3, 4))
display_list(fringe(tree))

const subset = subsets(list(1, 2, 3))
display_list(subset)