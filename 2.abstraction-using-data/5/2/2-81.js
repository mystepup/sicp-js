// 두 인수의 형식이 같을 때도 apply_generic이 인수들을 각자 상대방 형식으로 변환하려 드는 경우가 있음
// 테이블에 없는 연산으로 "javascript_number" apply_generic호출

// apply_generic("op", list(3, 5))
// type_tags = list("javascript_number", "javascript_number")
// fun = get("op", list("javascript_number", "javascript_number"))
// type1 = "javascript_number"
// type2 = "javascript_number"
// a1 = 3
// a2 = 5
// t1_to_t2 = get_coercion("javascript_number", "javascript_number")
// t2_to_t1 = get_coercion("javascript_number", "javascript_number")
// new Error(`no method for these types: ${list(op, type_tags)}`)
const {list, is_undefined, head, tail} = require("../../../common/utils");
const {apply_generic} = require("../generic-interface");

function exp(x, y) {
    return apply_generic("exp", list(x, y))
}

put("exp", list("javascript_number", "javascript_number"),
    (x, y) => tag(Math.pow(x, y)))

const z1 = pair("complex", pair("rectangular", pair(3, 4)))
const z2 = pair("complex", pair("rectangular", pair(2, 5)))
exp(z1, z2)
// apply_generic("exp", list(z1, z2))
// type_tags = list("complex", "complex")
// fun = get("exp", type_tags) -> undefined
// type1 = "complex"
// type2 = "complex"
// ...
// new Error(..)

/**
 * b 같은 수들의 강제 현변환을 수행한다면 정의되지 않은 연산에 대하여 무한 루프에 빠지게 된다.
 *
 */

// c: 그냥 그대로 두어도 강제 형변환을 적용하지 않는다.
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