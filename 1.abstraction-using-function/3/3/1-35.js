const { fixed_point } = require('./fixed-point')

function pi() {
    return fixed_point(x => 1 + 1 / x, 1)
}

console.log(pi())