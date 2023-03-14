function pair(x, y) {
    return m => m(x, y);
}

function head(z) {
    return z((p, q) => p)
}

console.log(head(pair(3, 1)))
// pair는 m => m(3, 1) 함수를 반환하고
// head는 pair로 부터 받은 함수에 (p, q) => p 함수를 인자로 넘긴다.
// (3, 1) => 3


function tail(z) {
    return z((p, q) => q)
}