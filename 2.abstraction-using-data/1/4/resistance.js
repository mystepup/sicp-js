const {div_interval, mul_interval, add_interval} = require("./public-use");
const {make_interval} = require("./constructor");

function pair1(r1, r2) {
    return div_interval(mul_interval(r1, r2),
        add_interval(r1, r2))
}

function pair2(r1, r2) {
    const one = make_interval(1, 1)
    return div_interval(one, add_interval(div_interval(one, r1),
        div_interval(one, r2)))
}

module.exports = { pair1, pair2 }