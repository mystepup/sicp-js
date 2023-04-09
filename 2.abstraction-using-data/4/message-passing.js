const {head} = require("../../common/utils");

function make_from_real_imag(x, y) {
    function dispatch(op) {
        return op === "real_part"
            ? x
            : op === "image_part"
            ? y
            : op === "magnitude"
            ? Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
            : op === "angle"
            ? Math.atan2(y, x)
            : throw new Error(`unknown op: ${op} -- make_from_real_imag`)
    }
    return dispatch
}

function apply_generic(op, arg) {
    return head(arg)(op)
}