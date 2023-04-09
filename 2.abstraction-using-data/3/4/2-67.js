const {make_code_tree, make_leaf, decode} = require("./huffman-tree");
const {list, display_list} = require("../../../common/utils");

const sample_tree = make_code_tree(make_leaf("A", 4),
    make_code_tree(make_leaf("B", 2),
        make_code_tree(
            make_leaf("D", 1),
            make_leaf("C", 1)
        )));

const sample_message = list(0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0)

display_list(decode(sample_message, sample_tree))