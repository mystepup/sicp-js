function make_accumulator(n) {
    return num => {
        n = num + n;
        return n;
    }
}

const a = make_accumulator(5);

console.log(a(10));

console.log(a(10))