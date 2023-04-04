// list("a", "b", "c")
// ["a", ["b", ["c", null]]]

// list(list("george"))
// [["george", null], null]

// tail(list(list("x1", "x2"), list("y1", "y2")))
// list("y1", "y2")
// ["y1", ["y2", null]]

// tail(head(list(list("x1", "x2"), list("y1", "y2"))))
// list("x2")
// ["x2", null]

// member("red", list("blue", "shoes", "yellow", "socks"))
// null

// member("red", list("red", "shoes", "blue", "socks"))
// list("red", "shoes", "blue", "socks")
// ....