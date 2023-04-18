// 실수부와 허수부, 크기와 각도가 보통수 일 수도 있고 유리수 일수도 있으며 시스템에 추가된
// 다른 어떤 수일 수도 있는 복소수를 다루어야 한다고 하자.
// 이를 위해 본문의 일반적 산술 시스템을 어떻게 바꾸어야 하는지 서술하고 실제로 구현하라.
// 보통 수와 유리수에 대해 일반적으로 작동하는 sine이나 cosine같은 연산을 정의해야 할 것이다. ->> ????

const {apply_generic} = require("../generic-interface");
const {list} = require("../../../common/utils");
const {attach_tag} = require("../../4/real-number");

function add(x, y) {
    return apply_generic("add", list(x, y))
}

function install_complex_package() {
    function make_from_real_imag(x, y) {
        return get("make_from_real_imag", "rectangular")(x, y)
    }

    function make_from_mag_ang(r, a) {
        return get("make_from_mag_ang", "polar")(r, a);
    }

    function add_comlex(z1, z2) {
        return make_from_real_imag(add(real_part(z1), real_part(z2)), add(imag_part(z1), imag_part(z2)))
    }

    function tag(z) { return attach_tag("complex", z); }

    put("add", list("complex", "complex"),
        (z1, z2) => tag(add_complex(z1, z2)));
}

const r1 = pair("rational", pair(3, 4))
const r2 = pair("rational", pair(2, 5))
const z1 = pair("complex", pair("rectangular", pair(r1, r2)))
const z2 = pair("complex", pair("rectangular", pair(r2, r1)))

add(z1, z2)

// 실수도 연산 함수를 수정해준다.

// apply_generic("add", list(z1, z2))
// type_tags = list("complex", "complex")
// fun = get("add", list("complex", "complex"))
// pair("complex", add_complex(z1, z2))
// // add_complex(z1, z2)
// // make_from_real_imag(add(r1, r2), add(r2, r1))
// // // add(r1, r2)
// // // apply_generic("add", list(r1, r2))
// // // type_tag = list("rational", "rational")
// // //