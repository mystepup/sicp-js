const C = make_connector()
const F = make_connector()
celsius_fahrenheit_converter(C, F)

function celsius_fahrenheit_converter(c, f) {
    const u = make_connector();
    const v = make_connector();
    const w = make_connector();
    const x = make_connector();
    const y = make_connector();
    multiplier(c, w, u);
    multiplier(v, x, u);
    adder(v, y, f);
    constant(9, w);
    constant(5, x);
    constant(32, y);
    return "ok";
}

probe("Celciius temp", C)
probe("Fahrenheight temp", F)

set_value(C, 25, "user")
set_value(F, 212, "user") // Error! Contradiction: (77, 212)"

forget_value(C, "user")
set_value(F, 212, "user")

function adder(a1, a2, sum) {
    function process_new_value() {

    }
    function process_forget_value() {

    }
    function me(request) {
        if (request === "I have a value") {
            process_new_value()
        } else if (request === "I lost my value") {

        } else {
            console.error(request, "unknown request --- adder")
        }
    }
    connect(a1, me)
    connect(a2, me)
    connect(sum, me)
    return me
}