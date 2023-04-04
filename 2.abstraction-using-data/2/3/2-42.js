const {list, head, tail, is_null} = require("../../../common/utils");
const {filter, enumerate_interval} = require("./conventional-interface");
const {flatmap} = require("./Nestsed-Mapping");
const {map, append, length} = require("../1/list-operation");

function adjoin_position(new_row, k, rest_of_queens) {
    return append(list(list(new_row - 1, k - 1)), rest_of_queens)
}
// 빈 국면
const empty_board = null

// 주어진 국면에서 k 번째 열의 주어진 행에 퀸을 놓아도 안전한지의 여부를 알려줌
function is_safe(k, positions) {
    const k_head = head(head(positions))
    const rest_of_queens = tail(positions)

    if (!is_null(rest_of_queens)) {
        const k_head_previous = head(head(rest_of_queens))

        if (k_head_previous - 1 === k_head || k_head_previous + 1 === k_head) {
            return false
        }
    }
    function iter(items) {
        if (is_null(items)) {
            return true
        } else {
            const h = head(head(items))
            if (h === k_head) {
                return false
            } else {
                return iter(tail(items))
            }
        }
    }
    return iter(rest_of_queens)
}
function queens(board_size) {
    function queen_cols(k) {
        return k === 0
            ? list(empty_board)
            : filter(positions => is_safe(k, positions),
                flatmap(rest_of_queens => /* 처음 k - 1개의 열에 k - 1개의 퀸을 배치하는 방법 하나를 돌려준다 */
                        map(new_row => adjoin_position(new_row, k, rest_of_queens), /* k번째 열에 퀸을 놓을 행 하나를 제안해 준다. */
                    enumerate_interval(1, board_size)),
                    queen_cols(k - 1)))
    }
    return queen_cols(board_size)
}

function queen_test(board_size) {
    function queen_cols(k) {
        return k === 0
            ? list(empty_board)
            : flatmap(rest_of_queens => /* 처음 k - 1개의 열에 k - 1개의 퀸을 배치하는 방법 하나를 돌려준다 */
                        map(new_row => adjoin_position(new_row, k, rest_of_queens), /* k번째 열에 퀸을 놓을 행 하나를 제안해 준다. */
                            enumerate_interval(1, board_size)),
                    queen_cols(k - 1))
    }
    return queen_cols(board_size)
}

// console.log(JSON.stringify(queen_test(1)))
// console.log(length(queen_test(1)))
// console.log(JSON.stringify(queen_test(2)))
// console.log(length(queen_test(2)))
// console.log(JSON.stringify(queen_test(3)))
// console.log(length(queen_test(3)))

// console.log(JSON.stringify(queens(1)))
// console.log(length(queens(1)))
// console.log(JSON.stringify(queens(2)))
// console.log(length(queens(2)))
// console.log(JSON.stringify(queens(3)))
// console.log(length(queens(3)))
// console.log(JSON.stringify(queens(4)))
// console.log(length(queens(4)))

console.log(JSON.stringify(queens(4)))
console.log(length(queens(4)))
 // Maximum call stack size exceeded