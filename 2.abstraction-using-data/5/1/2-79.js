const {apply_generic} = require("../generic-interface");
const {list} = require("../../../common/utils");

function is_equal(a, b) {
    return apply_generic("is_equal", list(a, b))
}

{
    function is_equal(a, b) {
        return a === b
    }
    put("is_equal", list("javascript_number", "javascript_number"), is_equal)
}

{
    function is_equal(a, b) {
        return numer(a) === number(b) && denom(a) === denom(b)
    }

    put("is_equal", list("rational", "rational"), is_equal)
}

// ....