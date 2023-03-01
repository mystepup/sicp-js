// Miller-Rabin test
/*
* n이 소수이고 a가 n보다 작은 양의 정수일 때
* a의 (n - 1)제곱은 n을 법으로하여 1과 합동이다.
*
* 무작위 수로 a < n을 선택하고, expmod를 이용해서
* n을 법으로한 a의 (n - 1)제곱을 구한다. 단 expmod에서 제곱 단계를 수행할 때 마다
* "n을 법으로 한 1의 자명하지 않은 제곱근", 즉 1이나 n - 1이 아니지만 제곱하면
* n을 법으로 하여 1과 합동인 어떤 수를 발견했는지 확인한다.
* 그런 1의 비자명 제곱근이 존재함을 증명할 수 있다면 n은 소수가 아니다.
* 또한, 만일 n이 홀수이고 소수가 아니면, 수 a < n들 중 적어도 절반에서는 이런식으로 a의 (n - 1)을
* 계산했을 때 n을 법으로한 1의 비자명 제곱근이 발견됨을 증명할 수 있다.
*
* 1의 비자명 제곱근이 발견되었을 때 그 사실을 신호하도록 expmod함수를 수정하고
* 이를 이용해서 fermat_test와 비슷한 형태의 밀러-라빈 판정함수를 구현하시오
* 힌트: expmod가 1의 비자명 제곱근을 발견했음을 앙리는 편리한 방법하나는 그런 경우 0을 돌려주는 것이다.
* */

const {is_even, square} = require("../common/utils");

function expmod(base, exp, m) {
    console.log(base, exp, m)

    if (exp === 0) {
        return 1
    } else {
        if (is_even(exp) && exp !== 1) {
            if(square(exp / 2) % m === 1) {
                return 0;
            } else {
                return square(expmod(base, exp / 2, m)) % m
            }
        } else {
            if (square(exp - 1) % m === 1) {
                return 0;
            } else {
                return (base * expmod(base, exp - 1, m)) % m;
            }
        }
    }


    return exp === 0
        ? 1
        : is_even(exp)
            ? square(expmod(base, exp / 2, m)) % m
            : (base * expmod(base, exp - 1, m)) % m
}

function nontrivial_sqrt(exp, m) {
}

function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n - 1, n) === 1;
    }
    return try_it(1 + Math.floor(Math.random() * (n - 1)))
}

function fast_is_prime(n, times) {
    return times === 0
        ? true
        : fermat_test(n)
            ? fast_is_prime(n, times - 1)
            : false
}

console.log(fast_is_prime(3, 1))