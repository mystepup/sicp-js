/*
A	 2	    NA	  16
BOOM 1	    SHA	  3
GET	 2	 	YIP	  9
JOB	 2	 	WAH	  1
*/
const {list, display_list, pair} = require("../../../common/utils");
const {generate_huffman_tree} = require("./2-69");
const {encode} = require("./2-68");
const {append, length} = require("../../2/1/list-operation");

const lists = list(list("A", 2), list("GET", 2), list("NA", 16), list("YIP", 9), list("BOOM", 1),
    list("JOB", 2), list("SHA", 3), list("WAH", 1))

const huffman_tree = generate_huffman_tree(lists)

const messages = "Get a job " +
    "Sha na na na na na na na na na " +
    "Get a job " +
    "Sha na na na na na na na na na " +
    "Wah yip yip yip yip yip yip yip yip yip " +
    "Sha boom"
const parsedMessages = messages.split(" ")
    .map(msg => msg.toUpperCase())
    .reduce((prev, curr) => append(prev, list(curr)), null)

const encodedMessage = encode(parsedMessages, huffman_tree)

display_list(encodedMessage)

console.log(length(encodedMessage))
console.log(length(parsedMessages))
