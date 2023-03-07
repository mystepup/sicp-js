const { square } = require('../../../common/utils')
const { compose } = require('./1-42')

// f의 n회 적용 함수

function repeated(f, n) {
    let g = f;
    for (let i = 0; i < n - 1; i++) {
        g = compose(f, g)
    }
    return g;
}

// console.log(repeated(square, 2)(5))

module.exports = { repeated }