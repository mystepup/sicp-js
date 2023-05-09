function or_gate(a1, a2, output) {
    const new_value = logical_not(logical_and(logical_not(get_signal(a1)), logical_not(get_signal(a2))))
    after_delay(inverter_delay * 2 + and_gate_delay, () => set_signal(output, new_value))
}