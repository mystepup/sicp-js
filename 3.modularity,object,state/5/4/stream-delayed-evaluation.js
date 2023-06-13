const {pair} = require("../../../common/utils");
const {add_streams, scale_stream} = require("../2/infinite-stream");
const {stream_map, stream_ref} = require("../stream");

function integral(delayed_integrand, initial_value, dt) {
    const integ = pair(initial_value,
        () => {
        const integrand = delayed_integrand()
            return add_streams(scale_stream(integrand, dt),
                integ)
        })
    return integ
}

function solve(f, y0, dt) {
    const y = integral(() => dy, y0, dt)
    const dy = stream_map(f, y)
    return y
}

// console.log(stream_ref(solve(y => y, 1, 0.001), 100))

function make_rand() {
    let x = random_init;
    return () => {
        x = rand_update(x)
        return x;
    }
}
const rand = make_rand()
const random_numbers = pair(random_init, () => stream_map(rand_update, random_numbers))