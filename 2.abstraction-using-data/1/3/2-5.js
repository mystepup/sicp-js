const {display} = require("../../../common/utils");

function pair(a, b) {
    function dispatch(m) {
        return m === 0 ? a : m === 1 ? b : new Error('argument not 0 or 1 -- pair')
    }
    return dispatch
}

function head(p) {
    const a = p(0)
    return Math.pow(2, a)
}

function tail(p) {
    const b = p(1)
    return Math.pow(3, b)
}

const p = pair(2, 3) // 4 * 27 = 108
const h = head(p)
const t = tail(p)
display(h)
display(t)