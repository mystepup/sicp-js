// accumulate(combiner, null_value, term, a, next, b)
// combiner 현재 항을 지금까지의 누산 결과와 조합하는 방법을 명시
// null_value 누산할 항이 더 이상 없을 때 사용할 기준 값을 뜻하는 인수

function accumulator(combiner, null_value, term, a, next, b) {
    return a > b
        ? null_value
        : combiner(term(a), accumulator(combiner, null_value, term, next(a), next, b))
}


function accumulator_iterative(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
            ? result
            : iter(next(a), combiner(term(a), result))
    }
    return iter(a, null_value)
}

function sum(a, b) {
    return accumulator_iterative((x, y) => x + y, 0, x => x, a, x => x + 1, b)
}

function product(a, b) {
    return accumulator_iterative((x, y) => x * y, 1, x => x, a, x => x + 1, b)
}

console.log(sum(1, 10))
console.log(product(1, 4))
