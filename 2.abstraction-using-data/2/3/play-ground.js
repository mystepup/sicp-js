const {list, display_list, divide} = require("../../../common/utils");
const {map, append, length} = require("./2-33");
const {horner_eval} = require("./2-34");
const {accumulate_n} = require("./2-36");
const {fold_right, fold_left} = require("./2-38");

display_list((map(x => x * x, list(1, 2, 3, 4))))
display_list(append(list(1, 2, 3), list(4, 5, 6)))
console.log(length(list(1, 2, 3, 4, 5, 6)))

console.log(horner_eval(2, list(1, 3, 0, 5, 0, 1)))

const s = list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9), list(10, 11, 12))

display_list(accumulate_n((x, y) => x + y, 0, s))

console.log(fold_right(divide, 1, list(1, 2, 3)))
console.log(fold_left(divide, 1, list(1, 2, 3)))