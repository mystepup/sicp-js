const { square } = require('../../../common/utils')

// lambert

function continued_fraction_iterative(n, d, k) {
    function iter(k, result) {
        return k === 0 ? result : iter(k - 1, n(k) / (d(k) + result))
    }
    return iter(k, 0);
}

function tan_cf(x, k) {
    function lambert(i) {
        return i === k ? x : -1 * square(x)
    }

    return continued_fraction_iterative(i => 2 * i - 1, lambert, k)
}


console.log(tan_cf(0, 10))
console.log(tan_cf(1.6, 100))