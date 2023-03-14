function pair(x, y) {
    return [x, y]
}

function head(p) {
    return p[1]
}

function tail(p) {
    return p[0]
}

module.exports = { pair, head, tail }