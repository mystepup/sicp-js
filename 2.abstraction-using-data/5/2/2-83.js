const {apply_generic} = require("../generic-interface");
{
    // javascript_number
    function raise(n) {
        return make_rational(n, 1);
    }
    put("raise", list("javascript_number"), raise)
}

{
    function raise(r) {
        return make_real(r, 0)
    }
    put("raise", list("rational"), raise)
}

{
    function raise(r) {
        return make_complex_from_real_imag(r, 0)
    }
    put("raise", list("real"), raise)
}

function raise(x) {
    return apply_generic("raise", list(x))
}