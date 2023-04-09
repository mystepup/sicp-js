const {list} = require("../../../common/utils");
const {attach_tag} = require("../real-number");

function deriv_sum(operands, variable) {

}

function install_deriv() {
    // interface to the rest of the system
    put("deriv", "+", deriv_sum)

    return "done"
}