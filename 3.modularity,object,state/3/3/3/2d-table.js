const {is_undefined, list} = require("../../../../common/utils");
const {set_tail, pair} = require("../../pair");

function lookup(key_1, key_2, table) {
    const subtable = assoc(key_1, tail(table))
    if (is_undefined(subtable)) {
        return undefined
    } else {
        const record = assoc(key_2, tail(subtable))
        return is_undefined(record)
            ? undefined
            : tail(record)
    }
}

function insert(key_1, key_2, value, table) {
    const subtable = assoc(key_1, tail(table))
    if (is_undefined(subtable)) {
        set_tail(table, pair(list(key_1, pair(key_2, value)), tail(table)))
    } else {
        const record = assoc(key_2, tail(table))
        if (is_undefined(record)) {
            set_tail(subtable, pair(pair(key_2, value), tail(subtable)))
        } else {
            set_tail(record, value)
        }
    }
    return "ok"
}