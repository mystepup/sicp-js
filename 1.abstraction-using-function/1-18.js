// Russian peasant multiplication

const {is_even, halve, double} = require("../common/utils");

function russian_pleasant_multiplication(result, a, b) {
    if (a === 1) {
        return result + b;
    }
    if (is_even(a)) {
        return russian_pleasant_multiplication(result, halve(a), double(b))
    } else {
        return russian_pleasant_multiplication(result + b, halve(a - 1), double(b))
    }
}

console.log(russian_pleasant_multiplication(0, 8, 16))