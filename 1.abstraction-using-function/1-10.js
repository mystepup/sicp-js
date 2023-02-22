function A(x, y) {
    return y === 0
        ? 0
        : x === 0
        ? 2 * y
        : y === 1
        ? 2
        : A(x - 1, A(x, y - 1))
}

console.log(A(1, 10)) // 2^10
console.log(A(2, 4)) //
console.log(A(3, 3)) //

// A(0, n) -> 2n
// A(1, n) -> 2 ** n
// A(2, n) -> 2 ** (2 ** n)