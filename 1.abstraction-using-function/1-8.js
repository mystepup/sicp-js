function improve(guess, x) {
    return (x / square(guess) + 2 * guess) / 3
}

function square(x) {
    return x * x
}

function cube_iter(guess, x) {
    return is_good_enough(guess, x) ? guess: cube_iter(improve(guess, x), x)
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

console.log(cube_iter(1, 125))

