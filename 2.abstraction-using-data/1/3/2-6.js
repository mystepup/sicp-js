/**
 * 무엇을 대입하던 x => x 함수를 반환하는 함수
 */
const zero = f => x => x;

// n을 f와 x에 적용한 결과에 f를 한 번 더 적용
function add_1(n) {
    return f => x => f(n(f)(x))
}

const one = f => x => f(x)
const two = f => x => f(f(x))
const three = f => x => f(f(f(x)))
const four = f => x => f(f(f(f(x))))

function plus(a, b) {
    return f => x => a(f)(b(f)(x))
}

add_1(two)(console.log)(0)

const result = add_1(two)
console.log(result(x => x + 1)(0))

const sum = plus(four, three)
console.log(sum(x => x + 2)(0))