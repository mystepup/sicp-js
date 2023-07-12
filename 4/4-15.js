/**
 * 임의의 함수 f와 임의의 객체 a에 대해 f가 a에 대해
 * 정지하는지를 정확하게 판정하는 함수 halts를 작성하는 것이 불가능함을 증명하라.
 *
 * 만일 halts 함수를 실제로 작성할 수 있다면, 다음 프로그램을 구현할 수 있다.
 */

function run_forever() {
    return run_forever();
}

function strange(f) {
    return halts(f, f)
        ? run_forever()
        : "halted"
}

strange(strange)
/**
 * 이 평가의 모든 결과 (정지 또는 무한 실행)가 앞에서 말한 halts의 의도된 작동 방식을 위반함을 보이면 된다.
 */

halts가 strange, strange가 정지한다고 판정했다.(strange(strange)를 정지한다고 판정한 것) -> true
halts(strange, strange)
run_forever() -> 무한루프

halts가 strange, strange가 무한루프를 돈다고 판정했다.(strange(strange)를 무한루프라고 판정한 것) -> false
정지.
