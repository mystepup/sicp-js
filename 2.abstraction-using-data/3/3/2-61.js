const {is_element_of_set} = require("./ordered-set");

function adjoin_set(x, set) {
    return is_element_of_set(x, set)
        ? set
        : pair(x, set);
}