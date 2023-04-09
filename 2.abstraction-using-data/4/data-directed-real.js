// Ben
const {head, tail, pair, list, is_pair, is_undefined, is_null} = require("../../common/utils");
const {map} = require("../2/1/list-operation");

function attach_tag(type_tag, contents) {
    return pair(type_tag, contents)
}

function type_tag(datum) {
    return is_pair(datum)
        ? head(datum)
        : throw new Error(`bad tagged datum :${datum} -- type_tag`)
}

function contents(datum) {
    return is_pair(datum)
        ? tail(datum)
        : throw new Error(`bad tagged datum :${datum} -- contents`)
}

// put(연산, 형식, 항목)
// get(연산, 형식)

function install_rectangular_package() {
    function real_part(z) { return head(z) }
    function imag_part(z) { return tail(z) }
    function make_from_real_imag(x, y) { return pair(x, y) }
    function magnitude(z) {
        return Math.sqrt(Math.pow(real_part(z), 2) + Math.pow(imag_part(z), 2))
    }
    function angle(z) {
        return Math.atan2(imag_part(z), real_part(z))
    }
    function make_from_mag_ang(r, a) {
        return pair(r * Math.cos(a), r * Math.sin(a))
    }

    function tag(x) {
        return attach_tag("rectangular",  x)
    }
    put("real_part", list("rectangular"), real_part)
    // ...
    put("make_from_real_imag", "rectangular", (x, y) => tag(make_from_real_imag(x, y)))
}

function install_polar_package() {

}


function apply_in_underlying_javascript(prim, arglist) {
    const arg_vector = []
    let i = 0;
    while (!is_null(arglist)) {
        arg_vector[i] = head(arglist)
        i = i + 1;
        arglist = tail(arglist)
    }
    return prim.apply(prim, arg_vector)
}



function apply_generic(op, args) {
    const type_tags = map(type_tag, args)
    const fun = get(op, type_tags)
    return !is_undefined(fun)
        ? apply_in_underlying_javascript(fun, map(contents, args))
        : throw new Error(`no method for these types -- apply_generic: ${JSON.stringify(list(op, type_tags))}`)
}

// 연산 real_part를 찾는다. argument인 z에 형식이 표현되어있다.
// type_tags로 z의 형식을 가져온다. 예: list("rectangular")
// 연산에 맞는 형식의 함수를 불러온다.
// 불러온 함수를 z의 content에 적용한다.
function real_part(z) {
    return apply_generic("real_part", list(z))
}

function make_from_real_imag(x, y) {
    return get("make_from_real_imag", "rectangular")(x, y)
}