function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause
}

function average(x, y) {
    return (x + y) / 2
}

function improve(guess, x) {
    return average(guess, x / guess)
}

function square(x) {
    return x * x
}

function abs(x) {
    return x > 0 ? x : -x
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001
}

function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
        guess,
        sqrt_iter(improve(guess, x),
            x))
}

sqrt_iter(1, 2);