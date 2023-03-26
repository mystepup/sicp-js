const {is_null, list, tail, head} = require("../../../common/utils");
const {append, map} = require("../1/list-operation");

function subsets(s) {
    if (is_null(s)) {
        return list(null)
    } else {
        const rest = subsets(tail(s))
        return append(rest, map(x => append(list(head(s)), x), rest))
    }
}

// tail의 부분집합
// tail의 부분집합에 head를 추가한 부분집합
// 위 2개를 합치면 전체 s의 부분집합이 된다

module.exports = { subsets }