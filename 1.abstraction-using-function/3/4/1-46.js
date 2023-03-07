// iterative improvement
/* 뭔가를 계산할 때는 일단 정답을 추측한 값을 정하고, 그 추측값이 충분히 좋은지 판정하고
 * 충분히 좋지 않다면 그 추측값을 좀 더 개선한 값을 추측값으로 삼아서 다시 시도하는 것을 말한다.
 * 이 전략을 구현한, 함수 두 개를 받는 iterative_improve 라는 함수를 작성
 */

const { abs, average, square } = require("../../../common/utils");

/**
 *
 * @param is_good_enough 추측값이 충분히 좋은지 판정하는 함수
 * @param guess 추측값을 개선하는 함수
 */
function iterative_improve(is_good_enough, guess) {
    function iter(x) {
        const next = guess(x)
        return is_good_enough(x, next) ? x : iter(next)
    }
    return iter
}

const tolerance = 0.00001;

function average_damp(f) {
    return x => average(x, f(x))
}

function sqrt(x) {
    return iterative_improve((x, y) => abs(x - y) < tolerance,
        average_damp(y => x / y))(1)
}

function fixed_point(f) {
    return iterative_improve((x, y) => abs(x - y) < tolerance,
        f)(1)
}

// console.log(sqrt(4))
console.log(fixed_point(Math.cos))
console.log(sqrt(4))