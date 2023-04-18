// 강등을 수행하는 함수 drop
// 주어진 객체를 강등할 수 있는지 일반적인 방식으로 판정하는 방법을 고안한다.
// 1.5 + 0i는 유리수까지 강등할 수 있고
// 복소수 1 + 0i는 정수까지 강등할 수 있으며
// 복소수 2 + 3i는 전혀 강등할 수 없다.

// 객체의 강등 가능 여부를 판정하는 한가지 전략
// 먼저 객체를 탑의 아래 수준으로 투영하는 project라는 일반적 연산을 정의한다.
// 예를 들어 복소수를 아래 수준으로 투영하려면 허수부를 포기해야 한다.
// 반대로 생각하면, 어떤 수를 project로 투영한 후 raise로 승격했을 때 원래의 형식으로 돌아온다면 그 수는 강등이 가능한 것이다.
// 이 발상을 구체화해서 주어진 객체를 최대한 아래로 강등시키는 drop 함수를 작성하라
// 다양한 투영 연산을 설계해야 하며, project를 하나의 일반적 함수로 시스템에 설치해야 한다.
// 2.79의 is_equal을 활용하고 apply_generic을 drop을 이용하여 다시 작성하라

const {apply_generic} = require("../generic-interface");
const {list, is_undefined, head, tail} = require("../../../common/utils");

function can_drop(x) {
    return is_equal(raise(project(x)), x)
}

function drop(x) {
    if (can_drop(x)) {
        return drop(project(x))
    } else {
        return x;
    }
}

function  project(x) {
    return apply_generic("project", list(x))
}

put("project", list("complex"), (x) => real_part(x)) // tag 시스템적용해야함.

put("project", list("real"), (x) => rational_part(x)) // tag 시스템적용해야함.

put("project", list("rational"), x => Math.round(x)) // tag 시스템적용해야함.

function apply_generic(op, args) {
    const type_tags = map(type_tag, args);
    const fun = get(op, type_tags)
    if (!is_undefined(fun)) {
        return drop(apply(fun, map(contents, args))) // apply drop
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