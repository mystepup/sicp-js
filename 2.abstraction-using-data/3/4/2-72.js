/**
 * encode 함수
 * encode_symbol 함수
 * 왼쪽, 오른쪽 트리를 구한다.
 * 심볼이 왼쪽에 있는지 검사한다. O(n)
 *  있으면 encode_symbol을 left_tree와 호출한다
 *  없으면 심볼이 오른쪽에 있는지 검사한다.
 *   있으면 encode_symbol을 right_tree와 호출한다.
 */