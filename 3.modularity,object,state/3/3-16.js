const {is_pair, head, tail, list, is_null, pair} = require("../../common/utils");
const {last_pair} = require("../../2.abstraction-using-data/2/1/2-17");
const {set_tail} = require("./pair");

function count_pairs(x) {
    return !is_pair(x) || is_null(x)
        ? 0
        : count_pairs(head(x)) + count_pairs(tail(x)) + 1;
}
const lst  = list(1, 2, 3)
// pair(1, pair(2, pair(3, null)))
console.log(count_pairs(lst))

const x = list(1, 2)
const z = pair(x, tail(x))
console.log(count_pairs(z))

const seven = list(1)
const l2 = pair(seven, seven)
const l1 = pair(l2, l2)
console.log(count_pairs(l1))

// const cycle = make_cycle(list(1, 2, 3))
// console.log(count_pairs(cycle))

