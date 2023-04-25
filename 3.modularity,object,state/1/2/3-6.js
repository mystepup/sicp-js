function make_rand() {
    let x = random_init;
    return () => {
        x = rand_update(x)
        return x;
    }
}

const rand = make_rand()


function make_rand() {
    let x = random_init
    function rand(m) {
        if (m === 'generate') {
            x = rand_update(x)
            return x;
        } else if (m === 'reset') {
            return (newRand) => {
                x = newRand;
            }
        } else {
            return `Invalid message: ${m}`
        }
    }
    return rand;
}