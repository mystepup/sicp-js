const {tail, head, is_null, pair, display_list} = require("../../common/utils");

/**
 * stream은 쌍 객체
 * 첫 요소는 스트림의 첫 요소.
 * 둘째 요소는 스트림의 나머지 요소들이 아니고, 요구 시 나머지 요소들을 만들어 주겠다는 약속(promise)에 해당하는 요소이다.
 * 구체적으로, 데이터 항목 h를 첫 요소로 하는 스트림을 쌍 객체 Pair(h, () => t)로 표현한다
 * 이 쌍 객체의 꼬리는 스트림의 꼬리 t를 돌려주는 무항함수이다.
 * 이 함수는 소비자의 요청이 있을  때 비로소 평가된다. 이를 지연(된)(delayed)평가라고 부른다.
 * 빈 스트림은 빈 목록과 마찬가지로 그냥 null로 표현한다.
 */

function stream_tail(stream) {
    return tail(stream)()
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1)
}
function stream_map(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)), () => stream_map(f, stream_tail(s)))
}
function stream_map_optimized(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
            memo(() => stream_map_optimized(f, stream_tail(s))))
}

function stream_for_each(fun, s) {
    if (is_null(s)) {
        return true
    } else {
        fun(head(s))
        return stream_for_each(fun, stream_tail(s))
    }
}

function stream_enumerate_interval(low, high) {
    return low > high
        ? null
        : pair(low, memo(() => stream_enumerate_interval(low + 1, high)))
}

function stream_filter(pred, stream) {
    return is_null(stream)
        ? null
        : pred(head(stream))
        ? pair(head(stream), () => stream_filter(pred, stream_tail(stream)))
        : stream_filter(pred, stream_tail(stream))
}

function memo(fun) {
    let already_run = false;
    let result = undefined;
    return () => {
        if (!already_run) {
            result = fun()
            already_run = true
            return result
        } else {
            return result
        }
    }
}

function display_stream(s) {
    return stream_for_each(console.log, s)
}

function display_stream_interval(s, to) {
    let stream = s;
    for (let i = 0; i < to; i++) {
        console.log(head(stream))
        stream = stream_tail(stream)
    }
}

module.exports = { stream_tail, stream_ref, stream_map, stream_for_each, display_stream
, stream_enumerate_interval, stream_filter, stream_map_optimized, memo, display_stream_interval }

