const { average, square } = require('../../../common/utils')
const { fixed_point } = require("../3/fixed-point");
const { repeated } = require('./1-43')

function average_damp(f) {
    return x => average(x, f(x))
}

function cube_root(x) {
    return fixed_point(average_damp(y => x / square(y)), 1)
}
function fixed_point_of_transform(g, transform, guess) {
    return fixed_point(transform(g), guess)
}

function square_root_of_n(x, n) {
    return fixed_point_of_transform(y => x / Math.pow(y, n - 1),
        repeated(average_damp, Math.floor(Math.log2(n))), 1)
}

console.log(square_root_of_n(4, 2)) // 2, 1
console.log(square_root_of_n(8, 3)) // 3, 1

console.log(square_root_of_n(16, 4)) // 4, 2
console.log(square_root_of_n(32, 5)) // 5, 2
console.log(square_root_of_n(64, 6)) // 6, 2
console.log(square_root_of_n(128, 7)) // 7, 2

console.log(square_root_of_n(256, 8)) // 8, 3
console.log(square_root_of_n(512, 9)) // 9, 3
console.log(square_root_of_n(1024, 10)) // 10, 3
console.log(square_root_of_n(32768, 15)) // 15, 3

console.log(square_root_of_n(65536, 16)) // 16, 4


