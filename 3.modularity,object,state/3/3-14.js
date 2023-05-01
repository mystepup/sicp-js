const {list, is_null, pair, tail, display_list} = require("../../common/utils");

function set_tail(p, x) {
    p[1] = x
}

function mystery(x) {
    function loop(x, y) {
        if (is_null(x)) {
            return y;
        } else {
            const temp = tail(x)
            set_tail(x, y)
            return loop(temp, x)
        }
    }
    return loop(x, null)
}

/**
 * 내부 함수 loop는 x의 tail의 기존 값을 이름 temp에 담는다.
 * 이를 임시 이름에 담아 두는 이유는 그 다음 행의 set_tail에서
 * x의 tail이 바뀌기 때문이다.
 * mystery가 하는 일은?
 */

const v = list("a", "b", "c", "d")

const w = mystery(v)

display_list(v)

display_list(w)
