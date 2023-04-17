const {list, is_null, head, tail, is_undefined, pair, is_pair} = require("../../../common/utils");
const {map} = require("../../2/1/list-operation");
const {apply_generic} = require("./generic-interface");
const {attach_tag} = require("../4/real-number");
const {gcd} = require("../../common/utils");
const {real_part, imag_part, magnitude, angle} = require("./complex-package");

function add(x, y) {
    return apply_generic("add", list(x, y))
}

function sub(x, y) {
    return apply_generic("sub", list(x, y))
}

function mul(x, y) {
    return apply_generic("mul", list(x, y))
}

function div(x, y) {
    return apply_generic("div", list(x, y))
}

function install_javascript_number_package() {
    function tag(x) {
        return attach_tag("javascript_number", x)
    }
    put("add", list("javascript_number", "javascript_number"), (x, y) => tag(x + y))
    put("sub", list("javascript_number", "javascript_number"), (x, y) => tag(x - y))
    put("mul", list("javascript_number", "javascript_number"), (x, y) => tag(x * y))
    put("div", list("javascript_number", "javascript_number"), (x, y) => tag(x / y))
    put("make", "javascript_number", x => tag(x))
    return "done"
}

function make_javascript_number(n) {
    return get("make", "javascript_number")(n)
}

function install_rational_package() {
    function numer(a) {
        return head(a)
    }
    function denom(b) {
        return tail(b)
    }
    function make_rat(n, d) {
        const g = gcd(n, d)
        return pair(n / g, d / g);
    }
    function add_rat(x, y) {
        return make_rat(numer(x) * denom(y) + numer(y) * denom(x), denom(x) * denom(y))
    }
    function sub_rat(x, y) {
        return make_rat(numer(x) * denom(y) - numer(y) * denom(x), denom(x) * denom(y))
    }
    function mul_rat(x, y) {
        return make_rat(numer(x) * numer(y) / denom(x) * denom(y))
    }
    function div_rat(x, y) {
        return make_rat(numer(x) * denom(y) / denom(x) * numer(y))
    }
    function tag(x) {
        return attach_tag("rational", x)
    }
    put("add", list("rational", "rational"), (x, y) => tag(add_rat(x, y)))
    put("sub", list("rational", "rational"), (x, y) => tag(sub_rat(x, y)))
    put("mul", list("rational", "rational"), (x, y) => tag(mul_rat(x, y)))
    put("div", list("rational", "rational"), (x, y) => tag(div_rat(x, y)))
    put("make", "rational", (n, d) => tag(make_rat(n, d)))
    return "done"
}

function make_rational(n, d) {
    return get("make", "rational")(n, d)
}

function install_complex_package() {
    // imported functions from rectangular and polar packages
    function make_from_real_imag(x, y) {
        return get("make_from_real_imag", "rectangular")(x, y);
    }
    function make_from_mag_ang(r, a) {
        return get("make_from_mag_ang", "polar")(r, a);
    }
    // internal functions
    function add_complex(z1, z2) {
        return make_from_real_imag(real_part(z1) + real_part(z2),
            imag_part(z1) + imag_part(z2));
    }
    function sub_complex(z1, z2) {
        return make_from_real_imag(real_part(z1) - real_part(z2),
            imag_part(z1) - imag_part(z2));
    }
    function mul_complex(z1, z2) {
        return make_from_mag_ang(magnitude(z1) * magnitude(z2),
            angle(z1) + angle(z2));
    }
    function div_complex(z1, z2) {
        return make_from_mag_ang(magnitude(z1) / magnitude(z2),
            angle(z1) - angle(z2));
    }
    // interface to rest of the system
    function tag(z) { return attach_tag("complex", z); }
    put("add", list("complex", "complex"),
        (z1, z2) => tag(add_complex(z1, z2)));
    put("sub", list("complex", "complex"),
        (z1, z2) => tag(sub_complex(z1, z2)));
    put("mul", list("complex", "complex"),
        (z1, z2) => tag(mul_complex(z1, z2)));
    put("div", list("complex", "complex"),
        (z1, z2) => tag(div_complex(z1, z2)));
    put("make_from_real_imag", "complex",
        (x, y) => tag(make_from_real_imag(x, y)));
    put("make_from_mag_ang", "complex",
        (r, a) => tag(make_from_mag_ang(r, a)));
    return "done";
}

function make_complex_from_real_imag(x, y) {
    return get("make_from_real_imag", "complex")(x, y)
}

function make_complex_from_mag_ang(r, a) {
    return get("make_from_mag_ang", "complex")(r, a)
}