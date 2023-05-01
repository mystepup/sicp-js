const {make_queue, insert_queue, delete_queue, front_ptr, front_queue} = require("./queue");
const {display_list, is_null} = require("../../../../common/utils");
const {tail, head} = require("../../pair");

const q1 = make_queue()

insert_queue(q1, "a")
print_queue(q1)

insert_queue(q1, "b")
print_queue(q1)
//
delete_queue(q1)
print_queue(q1)
//
delete_queue(q1)
print_queue(q1)

// queue를 출력했을 때 front_ptr가 가리키는 것은 첫 번째 큐 아이템이고 이 아이템은 큐의 다음 아이템들을 순차적으로 가리키고 있으므로
// 출력했을 때 전체 아이템을 출력하게 된다.
// b가 남아있는 이유는 rear_ptr가 가리키고 있기 때문이고 큐가 비어있는지 판단하는 기준은 front_ptr가 가리키는 값이다.

function print_queue(queue) {
    const front = front_ptr(queue)
    function iter_print(ptr) {
        if (is_null(ptr)) {

        } else {
            console.log(head(ptr))
            iter_print(tail(ptr))
        }
    }
    iter_print(front)
}
