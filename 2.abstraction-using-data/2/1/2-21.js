const {is_null, pair, head, square, tail} = require("../../../common/utils");
const {map} = require("./list-operation");

function square_list_v1(items) {
    return is_null(items)
        ? null
        : pair(square(head(items)), square_list_v1(tail(items)))
}

function square_list_v2(items) {
    return map(square, items)
}

module.exports = {square_list_v1, square_list_v2}