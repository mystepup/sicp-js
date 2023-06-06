const {make_serializer, concurrent_execute} = require("./serializer");
let x = 10;
const s = make_serializer()
// concurrent_execute(s(() => { x = x * x; }), s(() => { x = x + 1 })).then(() => console.log(x));
//
// console.log(x)

s(() => x = x * x)()
console.log(x)