function div_terms(L1, L2) {
    if (is_empty_termlist(L1)) {
        return list(the_empty_termlist, the_empty_termlist)
    } else {
        const t1 = first_term(L1)
        const t2 = first_term(L2)
        if (order(t2) > order(t1)) {
            return list(the_empty_termlist, L1)
        } else {
            const new_c = div(coeff(L1), coeff(L2))
            const new_o = order(t1) - order(t2)
            const rest_of_result = div_terms(mul_terms(sub_terms(make_term(new_o, new_c), L2), L1), L2);
            return list(sub_terms(make_term(new_o, new_c), head(rest_of_result)), tail(rest_of_result));
        }
    }
}