const { make_interval, lower_bound, upper_bound, center, width} = require('./constructor')
const { abs } = require('../../../common/utils')

function add_interval(x, y) {
    return make_interval(lower_bound(x) + lower_bound(y), upper_bound(x) + upper_bound(y))
}

function sub_interval(x, y) {
    return make_interval(lower_bound(x) - upper_bound(y), upper_bound(x) - lower_bound(y))
}

function mul_interval(x, y) {
    const p1 = lower_bound(x) * lower_bound(y)
    const p2 = lower_bound(x) * upper_bound(y)
    const p3 = upper_bound(x) * lower_bound(y)
    const p4 = upper_bound(x) * upper_bound(y)

    if (lower_bound(x) >= 0 && upper_bound(x) >= 0) {
        if (lower_bound(y) >= 0 && upper_bound(y) >= 0) {
            return make_interval(p1, p4)
        } else if (lower_bound(y) < 0 && upper_bound(y) >= 0) {
            return make_interval(p3, p4)
        } else if (lower_bound(y) < 0 && upper_bound(y) < 0) {
            return make_interval(p3, p2)
        }
    } else if (lower_bound(x) < 0 && upper_bound(x) >= 0) {
        if (lower_bound(y) >= 0 && upper_bound(y) >= 0) {
            return make_interval(p2, p4)
        } else if (lower_bound(y) < 0 && upper_bound(y) >= 0) {
            return make_interval(Math.min(p2, p3), Math.max(p1, p4))
        } else if (lower_bound(y) < 0 && upper_bound(y) < 0) {
            return make_interval(p3, p1)
        }
    } else if (lower_bound(x) < 0 && upper_bound(x) < 0) {
        if (lower_bound(y) >= 0 && upper_bound(y) >= 0) {
            return make_interval(p2, p3)
        } else if (lower_bound(y) < 0 && upper_bound(y) >= 0) {
            return make_interval(p2, p1)
        } else if (lower_bound(y) < 0 && upper_bound(y) < 0) {
            return make_interval(p4, p1)
        }
    }
}

function div_interval(x, y) {
    if (lower_bound(y) < 0 && upper_bound(y) > 0) {
        throw new Error("can't divide by interval included zero")
    }
    return mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)))
}

function display_interval(i) {
    console.log(`lower_bound: ${lower_bound(i)}, upper_bound: ${upper_bound(i)}`)
}

function uncertainty(i) {
    return center(i) / width(i)
}

module.exports = { add_interval, sub_interval, mul_interval, div_interval, display_interval }