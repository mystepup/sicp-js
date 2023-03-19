const {list, display_list, abs, display} = require("../../../common/utils");
const {length, append, map} = require("./list-operation");
const {last_pair} = require("./2-17");
const {reverse} = require("./2-18");
const {cc} = require("./2-19");
const {brooks, plus_curried, brooks_curried} = require("./2-20");
const {square_list_v1,square_list_v2} = require("./2-21");
const {square_list_bug_v1, square_list_bug_v2} = require("./2-22");
const {for_each} = require("./2-23")

const squares = list(1, 4, 9, 16, 25)
const odds = list(1, 3, 5, 7)

console.log(length(odds))

const appended1 = append(squares, odds)

display_list(appended1)

const last = last_pair(list(23, 72, 149, 34))
display_list(last)

const reversed = reverse(squares)
display_list(reversed)

const list_absed = map(abs, list(-10, 2.5, -11.6, 17))
display_list(list_absed)

const square = map(x => x * x, list(1, 2, 3, 4))
display_list(square)

const us_coins = list(50, 25, 10, 5, 1)
console.log(cc(100, us_coins))

console.log(brooks(plus_curried, list(3, 4)))
// console.log(brooks_curried(list(plus_curried, 3, 4)))

console.log(brooks_curried(list(brooks_curried,
                    list(plus_curried, 3, 4))))

console.log(brooks_curried(list(brooks_curried,
                    list(brooks_curried,
                        list(plus_curried, 3, 4)))))

display_list(square_list_v1(list(1, 2, 3, 4)))
display_list(square_list_v2(list(1, 2, 3, 4)))

display_list(square_list_bug_v1(list(1, 2, 3, 4)))
// display_list(square_list_bug_v2(list(1, 2, 3, 4)))

for_each(x => display(x), list(57, 321, 88))