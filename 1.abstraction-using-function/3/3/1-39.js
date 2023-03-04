const { square } = require('../../../common/utils')

// lambert

function continued_fraction_iterative(n, d, k) {
    function iter(i, result) {
        return i === 0 ? result : iter(i - 1, n(i) / (d(i) + result))
    }
    return iter(k, 0)
}

function tan_cf(x, k) {
    function lambert(i) {
        return i === 1 ? x : -1 * square(x)
    }

    return continued_fraction_iterative(lambert, i => 2 * i - 1, k)
}


console.log(tan_cf(0, 10))
console.log(tan_cf(1.57, 100))