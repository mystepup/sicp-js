const { newton_method } = require('./newton-method')
const { cube, square } = require("../../../common/utils");

function cubic(a, b, c) {
    return x => cube(x) + a * square(x) + b * x + c
}

console.log(newton_method(cubic(-1, 1, -1), 1))