const {gcd, pair, abs} = require("../../../common/utils");

function make_rat(n, d) {
    const g = gcd(n, d)
    return n * d < 0 ? pair(-1 * abs(n / g), abs(d / g)) : pair(abs(n / g), abs(d / g))
}

console.log(make_rat(-2, -6))
console.log(make_rat(2, -8))