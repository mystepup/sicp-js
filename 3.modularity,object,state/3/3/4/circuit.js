// SICP JS 3.3.4

const {is_null, pair, head, tail} = require("../../../../common/utils");

function call_each(functions) {
    if (is_null(functions)) {
        return "done";
    } else {
        head(functions)();
        return call_each(tail(functions));
    }
}

function make_wire() {
    let signal_value = 0;
    let action_functions = null;

    function set_my_signal(new_value) {
        if (signal_value !== new_value) {
            signal_value = new_value;
            return call_each(action_functions);
        } else {
            return "done";
        }
    }

    function accept_action_function(fun) {
        action_functions = pair(fun, action_functions);
        fun();
    }

    function dispatch(m) {
        return m === "get_signal"
            ? signal_value
            : m === "set_signal"
            ? set_my_signal
            : m === "add_action"
            ? accept_action_function
            : console.error(m, "unknown operation -- wire");
    }

    return dispatch;
}

function get_signal(wire) {
    return wire("get_signal");
}
function set_signal(wire, new_value) {
    return wire("set_signal")(new_value);
}
function add_action(wire, action_function) {
    return wire("add_action")(action_function);
}

module.exports = { make_wire, get_signal, set_signal, add_action }