function is_equal_to_zero(p) {
    return apply_generic("is_equal_to_zero", list(p))
}

put("is_equal_to_zero", list("polynomial"), (p) => {
    return coeff(p) === 0;
})