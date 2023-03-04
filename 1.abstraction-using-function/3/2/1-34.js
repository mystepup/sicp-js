const { square } = require('../../../common/utils')

function f(g) {
    return g(2)
}

console.log(f(square));
console.log(f(z => z * (z + 1)))

f(f)