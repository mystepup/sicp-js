import {equal, head, is_null, is_pair, is_undefined, list, set_tail, tail} from "../../../../common/utils";
import {length} from "../../../../2.abstraction-using-data/2/1/list-operation";

function assoc(key, records) {
    return is_null(records)
        ? undefined
        : equal(key, head(head(records)))
            ? head(records)
            : assoc(key, tail(records))
}

function lookup(keys, table) {
    const subtable = assoc(head(keys), tail(table))
    if (is_undefined(subtable)) {
        return undefined
    } else if (!is_pair(tail(subtable))) {
        return tail(subtable)
    }
    else {
        return lookup(tail(keys), subtable)
    }
}

function insert(keys, value, table) {
    // keys의 head가 table에 있는지 확인
    // keys에 아이템이 1개
    // 있으면 set_tail(찾은 것, value)
    // 없으면 set_tail(table, pair(...))
    // keys에 아이템이 여러개
    // 있으면 insert(tail(keys), tail())
    // 없으면 set_tail(talbe, pair(...))
    const subtable = assoc(head(keys), tail(table))
    if (is_undefined(subtable)) {
        const make_pair = (keys, value) => {
            if (is_null(tail(keys))) {
                return pair(head(keys), value)
            } else {
                return list(head(keys), make_pair(tail(keys), value))
            }
        }
        set_tail(table, pair(make_pair(keys, value), tail(table)))
    } else {
        if (length(keys) === 1) {
            set_tail(subtable, value)
        } else {
            insert(tail(keys), subtable)
        }
    }
    return "ok"
}