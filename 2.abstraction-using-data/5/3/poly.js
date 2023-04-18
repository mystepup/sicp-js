const {list, pair, head, tail, is_string} = require("../../../common/utils");
const {attach_tag} = require("../../4/real-number");

function install_polynomial_package() {
    // 내부 함수들
    // 다항식의 표현
    function make_poly(variable, term_list) {
        return pair(variable, term_list)
    }
    function variable(p) { return head(p) }
    function term_list(p) { return tail(p) }
    function is_same_variable(v1, v2) {
        return is_variable(v1) && is_variable(v2) && v1 === v2
    }
    function is_variable(x) {
        return is_string(x)
    }

    function adjoin_term(term, term_list) {
        return is_equal_to_zero(coeff(term))
            ? term_list
            : pair(term, term_list)
    }

    const the_empty_termlist = null;

    function first_term(term_list) { return head(term_list) }
    function rest_terms(term_list) { return tail(term_list) }
    function is_empty_termlist(term_list) { return is_null(term_list) }
    function make_term(order, coeff) { return list(order, coeff) }
    function order(term) { return head(term) }
    function coeff(term) { return tail(term ) }

    function add_poly(p1, p2) {
        return is_same_variable(variable(p1), variable(p2))
            ? make_poly(variable(p1),
                add_terms(term_list(p1), term_list(p2)))
            : new Error(`polys not in same var -- add_poly: ${list(p1, p2)}`)
    }

    function add_terms(L1, L2) {
        if (is_empty_termlist(L1)) {
            return L2;
        } else if (is_empty_termlist(L2)) {
            return L1;
        } else {
            const t1 = first_term(L1);
            const t2 = first_term(L2);
            return order(t1) > order(t2)
                ? adjoin_term(t1, add_terms(rest_terms(L1), L2))
                : order(t1) < order(t2)
                ? adjoin_term(t2, add_terms(L1, rest_terms(L2)))
                : adjoin_term(make_term(order(t1),
                                        add(coeff(t1), coeff(t2))), // use add from arithmetic package
                        add_terms(rest_terms(L1),
                                        rest_terms(L2)))
        }
    }

    function mul_terms(L1, L2) {
        return is_empty_termlist(L1)
            ? the_empty_termlist
            : add_terms(mul_term_by_all_terms(
                first_term(L1), L2
            ), mul_terms(rest_terms(L1), L2))
    }

    function mul_term_by_all_terms(t1, L) {
        if (is_empty_termlist(L)) {
            return the_empty_termlist;
        } else {
            const t2 = first_term(L)
            return adjoin_term(make_term(order(t1) + order(t2),
                                        mul(coeff(t1), coeff(t2))),
                                mul_term_by_all_terms(t1, rest_terms(L)))
        }
    }

    function mul_poly(p1, p2) {
        return is_same_variable(variable(p1), variable(p2))
            ? make_poly(variable(p1),
                mul_terms(term_list(p1), term_list(p2)))
            : new Error(`polys not in same var -- mul_poly: ${list(p1, p2)}`)
    }

    function tag(p) { return attach_tag("polynomial", p) }
    put("add", list("polynomial", "polynomial"), (p1, p2) => tag(add_poly(p1, p2)))
    put("mul", list("polynomial", "polynomial"), (p1, p2) => tag(mul_poly(p1, p2)))
    put("make", "polynomial", (variable, terms) => tag(make_poly(variable, terms)))

    return "done"
}

function make_polynomial(variable, terms) {
    return get("make", "polynomial")(variable, terms)
}