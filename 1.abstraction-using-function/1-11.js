// n < 3 f(n) = n
// n >= 3, f(n) = f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3)

function recursive(n) {
    if (n < 3) {
        return n;
    } else {
        return recursive(n - 1) + 2 * recursive(n - 2) + 3 * recursive(n - 3)
    }
}

function iterative(n) {
    return sum_iterative(0, 0, 0, 0, n)
}
function sum_iterative(result, prev1, prev2, count, n) {
    if (count > n) {
        return result;
    }

    if (count < 3) {
        return sum_iterative(count, result, prev1, count + 1, n)
    } else if (count >= 3) {
        return sum_iterative(result + 2 * prev1 + 3 * prev2, result, prev1, count + 1, n)
    }
}

// console.log(iterative(2))
console.log(iterative(4))

// 0 0
// 1 1
// 2 2
// 3 4
// 4 11


