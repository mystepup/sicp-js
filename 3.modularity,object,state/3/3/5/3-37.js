function celsius_fahrenheit_converter(c, f) {
    return cplus(cmul(cdiv(cv(9), cv(5)), x), cv(32))
}

const C = make_connector()
const F = celsius_fahrenheit_converter(C)

function cplus(x, y) {
    const z = make_connector()
    adder(x, y ,z)
    return z
}

function cmul(x, y) {
    const z = make_connector()
    multiplier(x, y, z)
    return z
}

function cdiv(x, y) {
    const z = make_connector()
    multiplier(y, z, x)
    return z
}

function cv(v) {
    const z = make_connector()
    return constant(v, z)
}