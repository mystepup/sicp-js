function monte_carlo(trials, experiment) {
    function iter(trials_remaining, trials_passed) {
        return trials_remaining === 0
            ? trials_passed / trials
            : experiment()
            ? iter(trials_remaining - 1, trials_passed + 1)
            : iter(trials_remaining - 1, trials_passed)
    }
    return iter(trials, 0)
}

function dirichlet_test() {
    return gcd(rand(),

        ) === 1;
}

function estimate_pi(trials) {
    return Math.sqrt(6 / monte_carlo(trials, dirichlet_test))
}