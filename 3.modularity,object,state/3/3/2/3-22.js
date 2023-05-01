const {is_null} = require("../../../../common/utils");
const {head, pair, set_tail, tail} = require("../../pair");

function make_queue() {
    let front_ptr = null;
    let rear_ptr = null;

    function set_front_ptr(item) {
        set_tail(item, front_ptr)
        front_ptr = item;
    }

    function set_rear_ptr(item) {
        set_tail(rear_ptr, item)
        rear_ptr = item;
    }

    function is_empty_queue() {
        return is_null(front_ptr)
    }

    function front_queue() {
        return is_empty_queue()
            ? console.error(`front queue called with an empty queue`)
            : head(front_ptr)
    }

    function insert_queue(item) {
        const new_pair = pair(item, null)
        if (is_empty_queue()) {
            set_front_ptr(new_pair)
            set_rear_ptr(new_pair)
        } else {
            set_rear_ptr(new_pair)
        }
    }

    function delete_queue() {
        if (is_empty_queue()) {
            console.error(`delete_queue called with an empty queue`)
        } else {
            set_front_ptr(tail(front_ptr))
        }
    }

    function dispatch(m) {
        return m === 'front_ptr'
            ? front_ptr
            : m === 'rear_ptr'
            ? rear_ptr
            : m === 'set_front_ptr'
            ? set_front_ptr
            : m === 'set_rear_ptr'
            ? set_rear_ptr
            : m === 'is_empty_queue'
            ? is_null(front_ptr)
            : m === 'front_queue'
            ? front_queue
            : m === 'insert_queue'
            ? insert_queue
            : m === 'delete_queue'
            ? delete_queue
            : console.error('Invalid message')
    }

    return dispatch
}