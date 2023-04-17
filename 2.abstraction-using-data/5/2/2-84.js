const {is_undefined, head, tail, list, is_null} = require("../../../common/utils");

/**
 * 주어진 인수들이 같은 형식이 될 때까지 적절히 승격한 후 연산을 수행하도록 수정
 * 탑에서 어느 것이 더 높은 형식인지 판정하는 방법을 고안할 필요가 있다.
 */

function superType(t1, t2) {
    const tower = list("integer", "rational", "real", "complex")

    const list_ref = (item, lst) => {
        return is_null(lst)
            ? null
            : item === head(lst)
            ? lst
            : list_ref(item, tail(lst))
    }

    const t1Depth = length(list_ref(t1))
    const t2Depth = length(list_ref(t2))
    if (t1Depth === 0 || t2Depth === 0) {
        new Error("not supported type")
    }
    return t1Depth > t2Depth // t2가 상위 형식
        ? -1
        : t1Depth === t2Depth // 같은 형식
        ? 0
        : 1 // t1이 상위 형식
}

function apply_generic(op, args) {
    const type_tags = map(type_tag, args);
    const fun = get(op, type_tags)
    if (!is_undefined(fun)) {
        return apply(fun, map(contents, args))
    } else {
        if (length(args) === 2) {
            const type1 = head(type_tags)
            const type2 = head(tail(type_tags))
            const a1 = head(args)
            const a2 = head(tail(args))
            return superType(type1, type2) === -1
                ? apply_generic(op, list(raise(a1), a2))
                : superType(type1, type2) === 1
                ? apply_generic(op, list(a1, raise(a2)))
                : new Error(`no method for these types: ${list(op, type_tags)}`)
        } else {
            new Error(`no method for these types: ${list(op, type_tags)}`)
        }
    }
}