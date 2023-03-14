const {make_interval, make_center_percent} = require("./constructor");
const {div_interval, display_interval} = require("./public-use");
const {display} = require("../../../common/utils");
const {pair1, pair2} = require("./resistance");

const A = make_center_percent(6.8, 0.001)
const B = make_center_percent(4.7, 5)

const AA = div_interval(A, A) // 같은 구간을 나눴지만 1이 되지 않는다.
const AB = div_interval(A, B)

display_interval(AA)
display_interval(AB)

const C = make_center_percent(4, 0.0001)
const D = make_center_percent(8, 1)

const pair1_CC = pair1(C, C)
const pair2_CC = pair2(C, C)

display_interval(pair1_CC)
display_interval(pair2_CC)

const pair1_CD = pair1(C, D)
const pair2_CD = pair2(C, D)

display_interval(pair1_CD)
display_interval(pair2_CD)