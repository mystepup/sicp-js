

module.exports = {
    abs: function(x) {
        return x > 0 ? x : -x
    },
    square: function(x) {
        return x * x;
    },
    is_even: function(x) {
        return x % 2 === 0;
    },
    double: function(x) {
        return x + x;
    },
    halve: function(x) {
        return x / 2;
    }
}