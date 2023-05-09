// ripple-carry adder

import {head, tail} from "../../../../common/utils";

function ripple_carry_adder(a_k, b_k, s_k, c) {
    function iter(a, b, s, carry) {
        const c_in = make_wire()
        full_adder(head(a), head(b), c_in, head(c), carry)
        iter(tail(a), tail(b), tail(s), c_in)
    }
    iter(a_k, b_k, s_k, c)
    return "ok"
}

// 지연 시간
// (2 * HA + or_gate_delay) * n