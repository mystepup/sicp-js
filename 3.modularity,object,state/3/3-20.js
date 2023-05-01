const {set_head, tail, pair, head} = require("./pair");
const x = pair(1, 2)
const z = pair(x, x)

set_head(tail(z), 17)

head(x)