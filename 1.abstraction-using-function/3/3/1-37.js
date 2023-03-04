// 무한 연분수 continued fraction

function continued_fraction(n, d, k) {
    return k === 0 ? 0 : n(k) / (d(k) + continued_fraction(n, d, k - 1))
}

function continued_fraction_iterative(n, d, k) {
    function iter(k, result) {
        return k === 0 ? result : iter(k - 1, n(k) / (d(k) + result))
    }
    return iter(k, 0);
}

console.log(continued_fraction(i => 1, i => 1, 11))
console.log(continued_fraction_iterative(i => 1, i => 1, 11))