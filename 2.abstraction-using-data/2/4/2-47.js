const {list, pair, head, tail} = require("../../../common/utils");
const {list_ref} = require("../1/list-operation");

{
    function make_frame(origin, edge1, edge2) {
        return list(origin, edge1, edge2)
    }

    function origin_frame(f) {
        return head(f)
    }

    function edge1_frame(f) {
        return list_ref(f, 1)
    }

    function edge_frame(f) {
        return list_ref(f, 2)
    }
}


{
    function make_frame(origin, edge1, edge2) {
        return pair(origin, pair(edge1, edge2))
    }

    function origin_frame(f) {
        return head(f)
    }

    function edge1_frame(f) {
        return head(tail(f))
    }

    function edge_frame(f) {
        return tail(tail(f))
    }
}

