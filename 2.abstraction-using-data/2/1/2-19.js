const {head, tail, is_null} = require("../../../common/utils");

function except_first_denomination(items) {
    return tail(items)
}
function first_denomination(items) {
    return head(items)
}

function no_more(items) {
    return is_null(items)
}

function cc(amount, coin_values) {
    return amount === 0
        ? 1
        : amount < 0 || no_more(coin_values)
        ? 0
        : cc(amount, except_first_denomination(coin_values)) +
            cc(amount - first_denomination(coin_values), coin_values)
}

// coin_values 목록의 순서가 달라진다면?
// 값은 ??

module.exports = { cc }
