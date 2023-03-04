const {is_even} = require("../../common/utils");

function expmod(base, exp, m) {
    const half_exp = expmod(base, exp / 2, m);
    return exp === 0
        ? 1
        : is_even(exp)
        ? (half_exp * half_exp) % m
        : (base * expmod(base, exp - 1, m)) % m
}

function expmod_improved(base, exp, m) {
    if (exp === 0) {
        return 1;
    } else {
        if (is_even(exp)) {
            const half_exp = expmod_improved(base, exp / 2, m)
            return (half_exp * half_exp) % m
        } else {
            return (base * expmod_improved(base, exp - 1, m))
        }
    }
}