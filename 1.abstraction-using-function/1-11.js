// n < 3 f(n) = n
// n >= 3, f(n) = f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3)

function recursive(n) {
    if (n < 3) {
        return n;
    } else {
        return recursive(n - 1) + 2 * recursive(n - 2) + 3 * recursive(n - 3)
    }
}

function iterative(result, prev1, prev2, count, n) {
    if (count > n) {
        return result;
    } else if (n < 3) {
        return iterative(n, n-1, n-2, count + 1, n)
    } else {
        return iterative(result + 2 * prev1 + 3 * prev2, result, prev1, count + 1, n)
    }
}


0, 0, 0, 0, 6
0, 0, 0, 1, 6 count = 0
1, 0, 0, 2, 6 count = 1
2, 1, 0, 3, 6 count = 2
3, 2, 1, 4, 6 count = 3
10, 3, 2, 5, 6 count = 4




