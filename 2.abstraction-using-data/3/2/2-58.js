const {is_pair, head, tail, is_number, list, is_string, is_null} = require("../../../common/utils");

function is_variable(x) {
    return is_string(x)
}

function is_same_variable(v1, v2) {
    return is_variable(v1) && is_variable(v2) && v1 === v2
}

function is_sum(x) {
    return is_pair(x) && head(tail(x)) === "+"
}

function addend(s) {
    return head(s)
}

function augend(s) {
    const item = tail(tail(s))
    if (is_null(tail(item))) {
        return head(item)
    } else {
        return head(list(item))
    }
    // return head(tail(tail(s)))
}

function is_product(x) {
    return is_pair(x) && head(tail(x)) === "*"
}

function multiplier(s) {
    return head(s)
}

function multiplicand(s) {
    const item = tail(tail(s))
    if (is_null(tail(item))) {
        return head(item)
    } else {
        return head(list(item))
    }
    // return head(tail(tail(s)))
}

function number_equal(exp, num) {
    return is_number(exp) && exp === num;
}

function make_sum(a1, a2) {
    return number_equal(a1, 0)
        ? a2
        : number_equal(a2, 0)
            ? a1
            : is_number(a1) && is_number(a2)
                ? a1 + a2
                : list(a1, "+", a2);
}

function make_product(m1, m2) {
    return number_equal(m1, 0) || number_equal(m2, 0)
        ? 0
        : number_equal(m1, 1)
            ? m2
            : number_equal(m2, 1)
                ? m1
                : is_number(m1) && is_number(m2)
                    ? m1 * m2
                    : list(m1, "*", m2);
}

function deriv(exp, variable) {
    return is_number(exp)
        ? 0
        : is_variable(exp)
            ? is_same_variable(exp, variable) ? 1 : 0
            : is_sum(exp)
                ? make_sum(deriv(addend(exp), variable),
                    deriv(augend(exp), variable))
                : is_product(exp)
                    ? make_sum(make_product(multiplier(exp),
                            deriv(multiplicand(exp),
                                variable)),
                        make_product(deriv(multiplier(exp),
                                variable),
                            multiplicand(exp)))
                    : new Error(`unknown expression type -- deriv: ${exp}`);

}


console.log(deriv(list("x", "+", 3), "x"))
console.log(deriv(list("x", "+", "x"), "x"))
console.log(deriv(list("x", "+", 3, "*", list("x", "+", "y", "+", 2)), "x"))
console.log(deriv(list("x", "+", list(3, "*", list("x", "+", list("y", "+", 2)))), "x"))

console.log(JSON.stringify(tail(tail(list("x", "+", list(3, "*", list("x", "+", list("y", "+", 2))))))))
console.log(JSON.stringify(tail(tail(list("x", "+", "3", "*", list("x", "+", "y", "+", 2))))))