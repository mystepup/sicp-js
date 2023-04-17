const {apply_generic} = require("./generic-interface");
const {list, head, tail, square} = require("../../common/utils");
const {attach_tag} = require("../4/real-number");

function real_part(z) {
    return apply_generic("real_part", list(z))
}

function imag_part(z) {
    return apply_generic("imag_part", list(z))
}

function magnitude(z) {
    return apply_generic("magnitude", list(z))
}

function angle(z) {
    return apply_generic("angle", list(z))
}

function make_from_real_imag(x, y) {
    return get("make_from_real_imag", "rectangular")(x, y)
}

function make_from_mag_ang(r, a) {
    return get("make_from_mag_ang", "polar")(r, a)
}

function install_rectangular_package() {
    // internal functions
    function real_part(z) { return head(z); }
    function imag_part(z) { return tail(z); }
    function make_from_real_imag(x, y) { return pair(x, y); }
    function magnitude(z) {
        return Math.sqrt(square(real_part(z)) + square(imag_part(z)));
    }
    function angle(z) {
        return Math.atan2(imag_part(z), real_part(z));
    }
    function make_from_mag_ang(r, a) {
        return pair(r * Math.cos(a), r * Math.sin(a));
    }

    // interface to the rest of the system
    function tag(x) { return attach_tag("rectangular", x); }
    put("real_part", list("rectangular"), real_part);
    put("imag_part", list("rectangular"), imag_part);
    put("magnitude", list("rectangular"), magnitude);
    put("angle", list("rectangular"), angle);
    put("make_from_real_imag", "rectangular",
        (x, y) => tag(make_from_real_imag(x, y)));
    put("make_from_mag_ang", "rectangular",
        (r, a) => tag(make_from_mag_ang(r, a)));
    return "done";
}

function install_polar_package() {
    // internal functions
    function magnitude(z) { return head(z); }
    function angle(z) { return tail(z); }
    function make_from_mag_ang(r, a) { return pair(r, a); }
    function real_part(z) {
        return magnitude(z) * Math.cos(angle(z));
    }
    function imag_part(z) {
        return magnitude(z) * Math.sin(angle(z));
    }
    function make_from_real_imag(x, y) {
        return pair(Math.sqrt(square(x) + square(y)),
            Math.atan2(y, x));
    }

    // interface to the rest of the system
    function tag(x) { return attach_tag("polar", x); }
    put("real_part", list("polar"), real_part);
    put("imag_part", list("polar"), imag_part);
    put("magnitude", list("polar"), magnitude);
    put("angle", list("polar"), angle);
    put("make_from_real_imag", "polar",
        (x, y) => tag(make_from_real_imag(x, y)));
    put("make_from_mag_ang", "polar",
        (r, a) => tag(make_from_mag_ang(r, a)));
    return "done";
}

module.exports = {
    real_part,
    imag_part,
    magnitude,
    angle,
}