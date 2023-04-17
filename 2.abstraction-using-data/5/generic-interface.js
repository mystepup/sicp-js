const {is_pair, is_null, is_undefined, list} = require("../../common/utils");
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

module.exports = { apply_generic }