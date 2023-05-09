function get_signal(l) {

}

function set_signal(l, value) {

}

function add_action(l, f)  {

}

function half_adder(a, b, s, c) {
    const d = make_wire()
    const e = make_wire()
    or_gate(a, b, d)
    and_gate(a, b, c)
    inverter(c, e)
    and_gate(d, e, s)
    return "ok"
}

function full_adder(a, b, c_in, sum, c_out) {
    const s = make_wire()
    const c1 = make_wire()
    const c2 = make_wire()
    half_adder(b, c_in, s, c1)
    half_adder(a, s, sum, c2)
    or_gate(c1, c2, c_out)
    return "ok"
}

function inverter(input, output) {
    function inverter_input() {
        const new_value = logical_not(get_signal(input))
        after_delay(inverter_delay, () => set_signal(output, new_value))
    }
    add_action(input, inverter_input)
    return "ok"
}

function logical_not(s) {
    return s === 0
        ? 1
        : s === 1
        ? 0
        : console.error(`invalid signal :${s}`)
}

function and_gate(a1, a2, output) {
    function and_action_function() {
        const new_value = logical_and(get_signal(a1), get_signal(a2))
        after_delay(and_gate_delay, () => set_signal(output, new_value))
    }
    add_action(a1, and_action_function)
    add_action(a2, and_action_function)
    return "ok"
}