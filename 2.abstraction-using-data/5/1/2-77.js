const z = pair("complex", pair("rectangular", pair(3, 4)))

put("magnitude", list("complex"), magnitude)

const mag = magnitude(z);

// apply_generic("magnitude", list(z))
/**
 * type_tags = list("complex")
 * func = get("magnitude", list("complex"))  // magnitude
 * apply_in_underlying_javascript(magnitude, pair("rectangular", pair(3, 4)))
 * magnitude.apply(magnitude, ["rectangular", 3, 4])
 *
 * magnitude(pair("rectangular", pair(3, 4))
 * apply_generic("magnitude", list(pair("rectangular", pair(3, 4))))
 * type_tags = list("rectangular")
 * fun = get("magnitude", list("rectangular"))
 * apply_in_underlying_javascript(magnitude, pair(3, 4))
 * magnitude.apply(magnitude, [3, 4])
 * return Math.sqrt(square(real_part(z)) + square(imag_part(z)));
 */

