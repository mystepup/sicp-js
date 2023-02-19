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


function sqrt_iter(guess, x) {
    return is_good_enough(guess, x) ? guess: sqrt_iter(improve(guess, x), x)
}

let prevGuess = -1;
function is_good_enough(guess, x) {
    if (prevGuess === -1) {
        prevGuess = guess
        return false
    } else if (prevGuess / guess < 1.000000001 && prevGuess / guess > 0.999999999) {
        return true
    } else {
        prevGuess = guess
        return false
    }
}

console.log(sqrt_iter(1, 100000000000000000))

