let a = 0;
function f(x) {
    if (a === 0) {
        a = x
        return 0
    }
    if (a > x) {
        return 1;
    } else {
        return 0;
    }
}

const fo = f(0) + f(1)
const b = f(1) + f(0)
console.log(fo, b)