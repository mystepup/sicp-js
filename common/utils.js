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

function sum(term, a, next, b) {
    return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function display(x) {
    console.log(x)
}

function pair(x, y) {
    return m => m(x, y)
}

function is_pair(p) {
    return typeof p === 'function'
}

function head(z) {
    return z((p, q) => p)
}

function tail(z) {
    return z((p, q) => q)
}

function is_null(list) {
    return list === null
}

function list(...elem) {
    return elem.length === 0
        ? null
        : pair(elem[0], list(...elem.slice(1)))
}

function display_list(list) {
    if (is_null(list)) console.log("list(null)")
    else {
        let log = "list("
        function iter(l) {
            const h = head(l)
            const t = tail(l)

            if (t === null) {
                log += h + ")"
            } else {
                log += h + ", "
                iter(t)
            }
        }
        iter(list)
        console.log(log)
    }
}

module.exports = {
    abs, square, is_even, double, halve, gcd, average, sum, cube, display, pair, head, tail,
    list, display_list, is_null, is_pair
}