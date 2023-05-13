const {pair} = require("../../../../common/utils");

function accept_action_functions(fun) {
    action_functions = pair(fun, action_functions)
}