const {get_signal, set_signal, add_action, make_wire} = require("./circuit");
const {make_agenda, add_to_agenda, current_time, is_empty_agenda, first_agenda_item, remove_first_agenda_item} = require("./agenda");

function after_delay(delay, action) {
    add_to_agenda(delay + current_time(the_agenda), action, the_agenda)
}

function propagate() {
    if (is_empty_agenda(the_agenda)) {
        return "done"
    } else {
        const first_item = first_agenda_item(the_agenda)
        first_item()
        remove_first_agenda_item(the_agenda)
        return propagate()
    }
}

function probe(name, wire) {
    add_action(wire, () =>
        console.log(name + " " + JSON.stringify(current_time(the_agenda)) + ", new_value = " + JSON.stringify(get_signal(wire))))
}

function inverter(input, output) {
    function invert_input() {
        const new_value = logical_not(get_signal(input));
        after_delay(inverter_delay,
            () => set_signal(output, new_value));
    }
    add_action(input, invert_input);
    return "ok";
}
function logical_not(s) {
    return s === 0
        ? 1
        : s === 1
        ? 0
        : console.error(s, "invalid signal");
}

function and_gate(a1, a2, output) {
    function and_action_function() {
        const new_value = logical_and(get_signal(a1),
            get_signal(a2));
        after_delay(and_gate_delay,
            () => set_signal(output, new_value));
    }
    add_action(a1, and_action_function);
    add_action(a2, and_action_function);
    return "ok";
}

function logical_and(a1, a2) {
    if ((a1 === 0 || a1 === 1) || (a2 === 0 || a2 === 1)) {
    } else {
        console.error("invalid signal")
    }
    return a1 === 1 && a2 === 1
        ? 1
        : 0
}

function or_gate(a1, a2, output) {
    function or_action_function() {
        const new_value = logical_or(get_signal(a1), get_signal(a2))
        after_delay(or_gate_delay, () => set_signal(output, new_value))
    }
    add_action(a1, or_action_function)
    add_action(a2, or_action_function)
    return "ok"
}

function logical_or(a1, a2) {
    if ((a1 === 0 || a1 === 1) || (a2 === 0 || a2 === 1)) {
    } else {
        console.error("invalid signal")
    }
    return a1 === 0 && a2 === 0
        ? 0
        : 1
}
function half_adder(a, b, s, c) {
    const d = make_wire();
    const e = make_wire();
    or_gate(a, b, d);
    and_gate(a, b, c);
    inverter(c, e);
    and_gate(d, e, s);
    return "ok";
}

function full_adder(a, b, c_in, sum, c_out) {
    const s = make_wire();
    const c1 = make_wire();
    const c2 = make_wire();
    half_adder(b, c_in, s, c1);
    half_adder(a, s, sum, c2);
    or_gate(c1, c2, c_out);
    return "ok";
}

const the_agenda = make_agenda();
const inverter_delay = 2;
const and_gate_delay = 3;
const or_gate_delay = 5;

const input_1 = make_wire();
const input_2 = make_wire();
const sum = make_wire();
const carry = make_wire();

probe("sum", sum);

probe("carry", carry);

half_adder(input_1, input_2, sum, carry)

set_signal(input_1, 1)

propagate()

set_signal(input_2, 1)

propagate()