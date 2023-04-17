const {is_undefined, head, tail} = require("../../../common/utils");

function add_complex_to_javascript_num(z, x) {
    return make_complex_from_real_imag(real_part(z) + x, imag_part(z))
}

put("add", list("complex", "javascript_number"), (z, x) => tag(add_complex_to_javascript_num(z, x))) //


// coercion
function javascript_number_to_complex(n) {
    return make_complex_from_real_imag(contents(n), 0);
}

put_coercion("javascript_number", "complex", javascript_number_to_complex)

// modified apply_Generic
function apply_generic(op, args) {
    const type_tags = map(type_tag, args);
    const fun = get(op, type_tags)
    if (!is_undefined(fun)) {
        return apply(fun, map(contents, args))
    } else {
        if (length(args) === 2) {
            const type1 = head(type_tags)
            const type2 = head(tail(type_tags))
            const a1 = head(args);
            const a2 = head(tail(args))
            const t1_to_t2 = get_coercion(type1, type2)
            const t2_to_t1 = get_coercion(type2, type1)
            return !is_undefined(t1_to_t2)
                ? apply_generic(op, list(t1_to_t2(a1), a2))
                : !is_undefined(t2_to_t1)
                ? apply_generic(op, list(a1, t2_to_t1(a2)))
                : new Error(`no method for these types: ${list(op, type_tags)}`)
        } else {
            new Error(`no method for these types: ${list(op, type_tags)}`)
        }
    }
}

// add(5, pair("complex", pair("rectangular", pair(3, 4))))
// apply_generic("add", list(5, pair("complex", pair("rectangular", pair(3, 4)))))
// type_tags = list("javascript_number", "complex")
// fun = get("add", list("javascript_number", "complex"))
// enter else statement
// argLength -> 2
// type1 = "javascript_number"
// type2 = "complex"
// a1 = 5
// a2 = pair("complex", pair("rectangular", pair(3, 4)))
// t1_to_t2 = javascript_number_to_complex
// t2_to_t1 = undefined
// apply_generic("add", list(javascript_number_to_complex(5), pair("complex", pair("rectangular", pair(3, 4)))))
// apply_generic("add", list(pair("complex", pair("rectangular", pair(5, 0))), pair("complex", pair("rectangular", pair(3, 4))))
// type_tags = list("complex", "complex")
// fun = get("add", list("complex", "complex"))
// (z1, z2) => pair("complex", add_complex(z1, z2))