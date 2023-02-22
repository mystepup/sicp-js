function inc(x) {
    return x + 1
}

function dec(x) {
    return x - 1
}

function plusA(a, b) {
    return a === 0 ? b : inc(plusA(dec(a), b))
}

/**
 *  inc(plusA(dec(a), b))
 *  inc(plusA(a - 1, b))
 *  inc(inc(plusA(a - 2, b))
 *  ...
 *  inc(inc(inc...inc(plusA(0, b))...)) -> deferred operation
 * */


function plusB(a, b) {
    return a === 0 ? b : plusB(dec(a), inc(b))
}

/**
 * plusB(dec(a), inc(b))
 * plusB(a - 1, b + 1)
 * plusB(a - 2, b + 2)
 * ...
 * plusB(0, b + a)
 */