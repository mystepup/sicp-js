
put("is_equal_to_zero", list("javascript_number"), (x) => x === 0)
put("is_equal_to_zero", list("rational"), (x) => numer(x) === 0)
put("is_equal_to_zero", list("complex"), x => real_part(x) === 0 && imag_part(x) === 0)

