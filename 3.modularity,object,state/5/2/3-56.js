// R.Hamming

// 2, 3, 5 이외의 소인수는 없는 모든 양의 정수를 중복 없이 오름차순으로 나열하라
// S는 1로 시작한다.
// scale_stream(S, 2)의 요소들은 S의 요소들이기도 하다.
// scale_stream(S, 3), scale_stream(S, 5) 요소들 역시 S의 요소들이기다.
// 이상의 요소들만 S의 요소들이다.

const {is_null, head, pair} = require("../../../common/utils");
const {stream_tail, display_stream, display_stream_interval} = require("../stream");
const {scale_stream} = require("./infinite-stream");

function merge(s1, s2) {
    if (is_null(s1)) {
        return s2
    } else if (is_null(s2)) {
        return s1
    } else {
        const s1head = head(s1)
        const s2head = head(s2)
        return s1head < s2head
            ? pair(s1head, () => merge(stream_tail(s1), s2))
            : s1head > s2head
            ? pair(s2head, () => merge(s1, stream_tail(s2)))
            : pair(s1head, () => merge(stream_tail(s1), stream_tail(s2)))
    }
}

const S = pair(1, () => merge(merge(scale_stream(S, 2), scale_stream(S, 3)), scale_stream(S, 5)))
display_stream_interval(S, 10)