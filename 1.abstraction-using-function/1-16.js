const { is_even } = require("../common/utils")
// iterative fast_exp

function iterative_fast_exp(a, b, n) {
    return n === 0 ? a
        : is_even(n)
        ? iterative_fast_exp(a, b * b, n / 2)
        : iterative_fast_exp(a * b, b, n - 1)
}


console.log(iterative_fast_exp(1, 3, 3))