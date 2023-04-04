function abs(x) {
    return x > 0 ? x : -x
}
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}
function is_even(x) {
    return x % 2 === 0;
}
function double(x) {
    return x + x;
}
function halve(x) {
    return x / 2;
}
function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y)
}

function average(x, y) {
    return (x + y) / 2;
}

function plus(x, y) {
    return x + y
}

function sum(term, a, next, b) {
    return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function display(x) {
    console.log(x)
}

function pair(x, y) {
    // return m => m(x, y)
    return [x, y]
}

function is_pair(p) {
    return typeof p === 'object'
}

function head(z) {
    // return z((p, q) => p)
    return z[0]
}

function tail(z) {
    // return z((p, q) => q)
    return z[1]
}

function is_null(list) {
    return list === null
}

function list(...elem) {
    return elem.length === 0
        ? null
        : pair(elem[0], list(...elem.slice(1)))
}

function is_odd(x) {
    return x % 2 === 1
}
//
// function display_list(items) {
//     function iter(list) {
//         if (is_null(list)) {
//             return ")"
//         } else if (is_pair(head(list))) {
//             return "list(" + iter(head(list)) + iter(tail(list))
//         } else {
//             return head(list) + ", " + iter(tail(list))
//         }
//     }
//     const result = iter(items)
//     console.log(`list(${result})`)
// }

function display_list(item) {
    console.log(JSON.stringify(item))
}

function times(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function is_number(x) {
    return typeof x === 'number'
}

function is_string(x) {
    return typeof x === 'string'
}

module.exports = {
    abs, square, is_even, double, halve, gcd, average, sum, cube, display, pair, head, tail,
    list, display_list, is_null, is_pair, is_odd, plus, times, divide, is_number, is_string
}