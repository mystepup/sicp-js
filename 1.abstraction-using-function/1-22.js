const is_prime = require("./find-divisor");
const {is_even} = require("../common/utils");

function get_time() {
    return Date.now();
}

function display(n) {
    console.log(n)
}

function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, get_time())
}

function report_prime(elapsed_time) {
    display(" *** ")
    display(elapsed_time)
    return true
}

function start_prime_test(n, start_time) {
    return is_prime(n)
        ? report_prime(get_time() - start_time)
        : true
}

function search_for_primes(from, to) {
    for (let i = from; i <= to; i++) {
        if (!is_even(i)) {
            timed_prime_test(i);
        }
    }
}


// search_for_primes(1000000, 10000000)

start_prime_test(1000037, Date.now())