const {is_null, head, tail, set_head, set_tail, pair} = require("../../../../common/utils");

function front_ptr(queue) {
    return head(queue)
}

function rear_ptr(queue) {
    return tail(queue)
}

function set_front_ptr(queue, item) {
    set_head(queue, item)
}

function set_rear_ptr(queue, item) {
    set_tail(queue, item)
}

function is_empty_queue(queue) {
    return is_null(front_ptr(queue))
}

function make_queue() {
    return pair(null, null)
}

function front_queue(queue) {
    return is_empty_queue(queue)
        ? console.error(`front queue called with an empty queue: ${queue}`)
        : head(front_ptr(queue))
}

function insert_queue(queue, item) {
    const new_pair = pair(item, null)
    if (is_empty_queue(queue)) {
        set_front_ptr(queue, new_pair)
        set_rear_ptr(queue, new_pair)
    } else {
        set_tail(rear_ptr(queue), new_pair)
        set_rear_ptr(queue, new_pair)
    }
}

function delete_queue(queue) {
    if (is_empty_queue(queue)) {
        console.error(`delete_queue called with an empty queue: ${queue}`)
    } else {
        set_front_ptr(queue, tail(front_ptr(queue)))
    }
}

module.exports = {
    front_ptr,
    rear_ptr,
    set_front_ptr,
    set_rear_ptr,
    is_empty_queue,
    make_queue,
    front_queue,
    insert_queue,
    delete_queue,
}