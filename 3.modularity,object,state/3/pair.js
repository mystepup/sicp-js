function pair(x, y) {
    function set_x(v) { x = v }
    function set_y(v) { y = v }

    return m => m === "head"
        ? x
        : m === "tail"
        ? y
        : m === "set_head"
        ? set_x
        : m === "set_tail"
        ? set_y
        : console.error(`undefined operation -- pair ${m}`)
}

function head(z) {
    return z('head')
}

function tail(z) {
    return z('tail')
}

function set_head(z, new_value) {
    return z("set_head")(new_value)
}

function set_tail(z, new_value) {
    return z("set_tail")(new_value)
}

module.exports = { pair, head, tail, set_head, set_tail }
