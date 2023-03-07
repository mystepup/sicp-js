const { repeated } = require('./1-43')

// smoothling

const dx = 0.00001
function smooth(f) {
    return x => (f(x - dx) + f(x) + f(x + dx)) / 3
}

function repeated_smooth(n) {
    return repeated(smooth, n)
}