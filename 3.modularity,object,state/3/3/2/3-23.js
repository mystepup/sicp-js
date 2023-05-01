const {pair, head, tail, set_tail, set_head} = require("../../pair");
const {is_null} = require("../../../../common/utils");

function make_deque() {
    return pair(null, null)
}

function front_ptr(d) {
    return head(d)
}

function rear_ptr(d) {
    return tail(d)
}

function is_empty_deque(d) {
    return is_null(front_ptr(d)) && is_null(rear_ptr(d))
}

function front_deque(d) {
    return is_empty_deque(d)
        ? console.error(`${d} is empty deque`)
        : head(front_ptr(d))
}

function rear_deque(d) {
    return is_empty_deque(d)
        ? console.error(`${d} is empty deque`)
        : head(rear_ptr(d))
}

function front_insert_deque(d, item) {
    if (is_empty_deque(d)) {
        set_head(d, item)
        set_tail(d, item)
    } else {
        set_tail(item, front_ptr(d))
        set_head(d, item)
    }
}

function front_delete_deque(d) {
    set_head(d, tail(front_ptr(d)))
}

function rear_insert_deque(d, item) {
    if (is_empty_deque(d)) {
        set_head(d, item)
        set_tail(d, item)
    } else {
        set_tail(rear_ptr(d), item)
        set_tail(d, item)
    }
}

function rear_delete_deque(d) {
    // doubly linked list 여야함
}