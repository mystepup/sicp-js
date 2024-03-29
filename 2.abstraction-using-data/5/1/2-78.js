const {is_number, pair, is_pair, head, tail} = require("../../../common/utils");

function type_tag(datum) {
    return is_number(datum)
        ? "javascript_number"
        : is_pair(datum)
        ? head(datum)
        : new Error(`bad tagged datum -- type_tag: ${datum}`)
}

function contents(datum) {
    return is_number(datum)
        ? datum
        : is_pair(datum)
        ? tail(datum)
        : new Error(`bad tagged datum -- contents: ${datum}`)
}

function attach_tag(type_tag, contents) {
    return is_number(contents)
        ? contents
        : pair(type_tag, contents)
}