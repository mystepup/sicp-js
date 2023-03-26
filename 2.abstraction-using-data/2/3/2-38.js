const {is_null, head, tail} = require("../../../common/utils");
const {accumulate} = require("./conventional-interface");

function fold_right(op, initial, sequence) {
    return accumulate(op, initial, sequence)
}
function fold_left(op, initial, sequence) {
    function iter(result, rest) {
        return is_null(rest)
            ? result
            : iter(op(result, head(rest)),
                tail(rest))
    }
    return iter(initial, sequence)
}

module.exports = { fold_right, fold_left }