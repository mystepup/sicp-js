const {square} = require("../common/utils")
function is_even(n) {
    return n % 2 === 0;
}

function fast_expt(b, n) {
    return n === 0
        ? 1
        : is_even(n)
        ? square(fast_expt(b, n / 2))
        : b * fast_expt(b, n - 1)
}

console.log(fast_expt(2, 5))