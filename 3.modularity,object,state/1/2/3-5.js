// Monte Carlo Integration
// predicate P(x, y) 가 참인 점 (x, y)들로 규정되는 영역의 면적을 계산
// 단위 원의 면적을 근사 x^2 + y^2 <= 1

function random_in_range(low, high) {
    const range = high - low;
    return low + Math.random() * range;
}

function rand() {
    let x = random_in_range(-1, 1)
    return x;
}

function estimate_integral(trials, predicate, p1, p2) {
    function iter(trials_remaining, trials_passed) {
        return trials_remaining === 0
            ? trials_passed / trials
            : predicate()
            ? iter(trials_remaining - 1, trials_passed + 1)
            : iter(trials_remaining - 1, trials_passed)
    }
    return iter(trials, 0)
}

function predicate() {
    return Math.sqrt(rand()) + Math.sqrt(rand()) <= 1;
}

function estimate_pi(trials) {
    return estimate_integral(trials, predicate, [-1, 1], [-1, 1])
}


function estimate_integral(pred, x1, x2, y1, y2, trials) {
    const area_rect = (x2 - x1) * (y2 - y1)
    return monte_carlo(trials, () => pred(random_in_range(x1, x2), random_in_range(y1, y2))) * area_rect
}