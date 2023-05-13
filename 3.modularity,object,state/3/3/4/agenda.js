// 예정표 객체들은 time segment 들로 이루어 진다.
// 각 시간 조각은 수치(시간)과 대기열(queue)의 쌍인데, 대기열은 그 시간 조각에서 실행할 함수들을 담는다.

const {pair, head, tail, list, set_head, set_tail, is_null, display_list} = require("../../../../common/utils");
const {make_queue, insert_queue, delete_queue, is_empty_queue, front_queue} = require("../2/queue");

function make_time_segment(time, queue) {
    return pair(time, queue)
}

function segment_time(s) {
    return head(s)
}

function segment_queue(s) {
    return tail(s)
}

/**
 * 예정표 자체는 시간 조각들의 1차원 테이블이다.
 * 시간 조각들은 시간의 오름차순으로 저장된다.
 * 또한, 예정표의 머리에는 현재 시간이 저장된다. 여기서 현재 시간은 예정표의 마지막 작용 함수가 실행된 시간이다.
 * 새로 생성된 에정표에는 시간 조각이 하나도 없고 현재 시간은 0이다
 */
function make_agenda() {
    return list(0)
}

function current_time(agenda) {
    return head(agenda)
}

function set_current_time(agenda, time) {
    set_head(agenda, time)
}

function segments(agenda) {
    return tail(agenda)
}

function set_segments(agenda, segs) {
    set_tail(agenda, segs)
}

function first_segment(agenda) {
    return head(segments(agenda))
}

function rest_segments(agenda) {
    return tail(segments(agenda))
}

function is_empty_agenda(agenda) {
    return is_null(segments(agenda))
}

function add_to_agenda(time, action, agenda) {
    function belongs_before(segs) {
        return is_null(segs) || time < segment_time(head(segs))
    }

    function make_new_time_segment(time, action) {
        const q = make_queue()
        insert_queue(q, action)
        return make_time_segment(time, q)
    }

    function add_to_segments(segs) {
        if (segment_time(head(segs)) === time) {
            insert_queue(segment_queue(head(segs)), action)
        } else {
            const rest = tail(segs)
            if (belongs_before(rest)) {
                set_tail(segs, pair(make_new_time_segment(time, action),
                                    tail(segs)))
            } else {
                add_to_segments(rest)
            }
        }
    }

    const segs = segments(agenda)
    if (belongs_before(segs)) {
        set_segments(agenda,
            pair(make_new_time_segment(time, action), segs))
    } else {
        add_to_segments(segs)
    }
}

function remove_first_agenda_item(agenda) {
    const q = segment_queue(first_segment(agenda))
    delete_queue(q)
    if (is_empty_queue(q)) {
        set_segments(agenda, rest_segments(agenda))
    } else {}
}

function first_agenda_item(agenda) {
    if (is_empty_agenda(agenda)) {
        console.error("agenda is empty -- first_agenda_item")
    } else {
        const first_seg = first_segment(agenda)
        set_current_time(agenda, segment_time(first_seg))
        return front_queue(segment_queue(first_seg))
    }
}


module.exports = { make_agenda, add_to_agenda, current_time, is_empty_agenda, first_agenda_item, remove_first_agenda_item }