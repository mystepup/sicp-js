const {make_vect, xcor_vect, ycor_vect} = require("./frame");

function add_vect(a, b) {
    return make_vect(xcor_vect(a) + xcor_vect(b), ycor_vect(a) + ycor_vect(b))
}

function sub_vect(a, b) {
    return make_vect(xcor_vect(a) - xcor_vect(b), ycor_vect(a) - ycor_vect(b))
}

function scale_vect(s, v) {
    return make_vect(s * xcor_vect(v), s * ycor_vect(v))
}