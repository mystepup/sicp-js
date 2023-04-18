const {is_number, is_string, list, is_pair, head, tail} = require("../../../common/utils");



function is_same_variable(v1, v2) {
    return is_variable(v1) && is_variable(v2) && v1 === v2
}

function make_sum(a1, a2) {
    return number_equal(a1, 0)
        ? a2
        : number_equal(a2, 0)
            ? a1
            : is_number(a1) && is_number(a2)
                ? a1 + a2
                : list("+", a1, a2);
}

function number_equal(exp, num) {
    return is_number(exp) && exp === num;
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
                    : list("*", m1, m2);
}
function is_sum(x) {
    return is_pair(x) && head(x) === "+"
}

function addend(s) {
    return head(tail(s))
}

function augend(s) {
    return head(tail(tail(s)))
}

function is_product(x) {
    return is_pair(x) && head(x) === "*"
}

function multiplier(s) {
    return head(tail(s))
}

function multiplicand(s) {
    return head(tail(tail(s)))
}

function is_exp(x) {
    return is_pair(x) && head(x) === "**"
}

function base(s) {
    return head(tail(s))
}

function exponent(s) {
    return head(tail(tail(s)))
}

function make_exp(b, e) {
    return number_equal(e, 0)
        ? 1
        : number_equal(e, 1)
        ? b
        : list("**", b, e);
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
                    : is_exp(exp)
                        ? make_product(make_product(exponent(exp), make_exp(base(exp), make_sum(exponent(exp), -1))),
                            deriv(base(exp), variable))
                        : throw Error(`unknown expression type -- deriv: ${exp}`);

}

module.exports = { deriv }