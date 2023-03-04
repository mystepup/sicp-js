// 무한 연분수 continued fraction

function continued_fraction(n, d, k) {
    return k === 0 ? 0 : n(k) / (d(k) + continued_fraction(n, d, k - 1))
}

function continued_fraction_iterative(n, d, k) {
    function iter(i, result) {
        return i === 0 ? result : iter(i - 1, n(i) / (d(i) + result))
    }
    return iter(k, 0)
}