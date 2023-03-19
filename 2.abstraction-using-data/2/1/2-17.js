const {is_null, tail} = require("../../../common/utils");

function last_pair(list) {
    if (is_null(list)) {
        throw new Error("list should not be empty")
    }
    return is_null(tail(list)) ? list : last_pair(tail(list))
}

module.exports = {last_pair}