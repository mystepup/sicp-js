function fib(n) {
    return n === 0
        ? 0
        : n === 1
        ? 1
        : fib(n - 1) + fib(n - 2)
}

const memo_fib = memoize(n => n === 0
                            ? 0
                            : n === 1
                            ? 1
                            : memo_fib(n - 1) + memo_fib(n - 2)
                        )
const memo_fib_re = memoize(fib) // 다시 memoize를 계산하지 않는다.
function memoize(f) {
    const table = []
    return x => {
        table;
        console.log('memoize: ', f)
        return f(x)
    }
}

memo_fib(3)
memo_fib_re(3)