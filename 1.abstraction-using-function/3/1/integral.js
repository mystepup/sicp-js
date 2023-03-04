const { sum, cube } = require('../../../common/utils')

function integral(f, a, b, dx) {
    function add_dx(x) {
        return x + dx;
    }
    return sum(f, a + dx / 2, add_dx, b) * dx;
}

console.log(integral(cube, 0, 1, 0.001))