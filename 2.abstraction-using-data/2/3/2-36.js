const {is_null, head, pair, tail} = require("../../../common/utils");
const {accumulate} = require("./conventional-interface");
const {map} = require("../1/list-operation");

function accumulate_n(op, init, seqs) {
    return is_null(head(seqs))
        ? null
        : pair(accumulate(op, init, map(x => head(x), seqs)),
            accumulate_n(op, init, map(x => tail(x), seqs)))
}

module.exports = { accumulate_n }