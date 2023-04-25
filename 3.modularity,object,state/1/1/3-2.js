function make_monitored(f) {
    let count = 0;
    function mf(paramOrFlag) {
        if (paramOrFlag === 'how many calls') {
            return count;
        } else if (paramOrFlag === 'reset count') {
            count = 0;
        } else {
            count = count + 1;
            return f(paramOrFlag)
        }
    }
    return mf;
}

const s = make_monitored(Math.sqrt)

console.log(s(100))

console.log(s("how many calls"))

console.log(s("reset count"))

console.log(s("how many calls"))