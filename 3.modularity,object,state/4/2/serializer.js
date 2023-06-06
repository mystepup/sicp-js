/**
 * 각 f에 대해 개별적인 스레드를 만들고
 * 그 스레드에서 f를 적용한다. 이 스레드들은 모두 동시에 실행된다.
 */
const {list, set_head, head} = require("../../../common/utils");

async function concurrent_execute(...functions) {
    await Promise.all(functions.map(f => f()))
}

function make_serializer() {
    const mutex = make_mutex()
    return f => {
        function serialized_f(...args) {
            mutex("acquire")
            const val = f(...args)
            mutex("release")
            return val;
        }
        return serialized_f
    }
}

function make_mutex() {
    const cell = list(false)
    function the_mutex(m) {
        return m === 'acquire'
            ? test_and_set(cell)
                ? the_mutex("acquire")
                : true
            : m === 'release'
            ? clear(cell)
            : console.error('unknown request -- mutex')
    }
    return the_mutex
}

function clear(cell) {
    set_head(cell, false)
}

function test_and_set(cell) {
    if (head(cell)) {
        return true
    } else {
        set_head(cell, true)
        return false
    }
}

module.exports = { make_serializer, concurrent_execute }



