function continued_fraction_iterative(n, d, k) {
    function iter(i, result) {
        return i === 0 ? result : iter(i - 1, n(i) / (d(i) + result))
    }
    return iter(k, 0)
}

function euler(i) {
    return i === 1
        ? 1
        : i === 2
        ? 2
        : i % 3 === 2
        ? 2 * (Math.ceil(i / 3) + 1)
        : 1
}

console.log(continued_fraction_iterative(i => 1, euler, 11))