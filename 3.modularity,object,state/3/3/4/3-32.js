const {make_wire, get_signal, set_signal, add_action} = require("./circuit");
const {add_to_agenda, current_time, make_agenda} = require("./agenda");

const and_gate_delay = 3;

function logical_and(a1, a2) {
    if ((a1 === 0 || a1 === 1) || (a2 === 0 || a2 === 1)) {
    } else {
        console.error("invalid signal")
    }
    return a1 === 1 && a2 === 1
        ? 1
        : 0
}

function after_delay(delay, action) {
    add_to_agenda(delay + current_time(the_agenda), action, the_agenda)
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

const input1 = make_wire()
const input2 = make_wire()
const output = make_wire()
const the_agenda = make_agenda()

and_gate(input1, input2, output)