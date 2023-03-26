const {accumulate} = require("./conventional-interface");

function horner_eval(x, coefficient_sequence) {
    return accumulate((this_coeff, higher_terms) => this_coeff + higher_terms * x,
                    0,
                    coefficient_sequence)
}

module.exports = { horner_eval }