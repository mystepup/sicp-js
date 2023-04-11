function make_from_mag_ang(r, a) {
    function  dispatch(op) {
        return op === "real_part"
            ? r * Math.cos(a)
            : op === "imag_part"
            ? r * Math.sin(a)
            : op === "magnitude"
            ? r
            : op === "angle"
            ? a
            : new Error(`unknown op: ${op} -- make_from_mag_ang`)
    }
    return dispatch
}