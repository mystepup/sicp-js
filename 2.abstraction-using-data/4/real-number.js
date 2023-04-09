const {head, tail, pair, is_pair} = require("../../common/utils");

function add_complex(z1, z2) {
    return make_from_real_imag(real_part(z1) + real_part(z2),
        image_part(z1) + image_part(z2))
}

function mul_complex(z1, z2) {
    return make_from_mag_ang(magnitude(z1) * magnitude(z2),
        angle(z1) + angle(z2))
}

// Ben
{
    function real_part_rectangular(z) {
        return head(z)
    }

    function image_part_rectangular(z) {
        return tail(z)
    }

    function magnitude_rectangular(z) {
        return Math.sqrt(Math.pow(real_part_rectangular(z), 2) + Math.pow(image_part_rectangular(z), 2))
    }

    function angle_rectangular(z) {
        return Math.atan2(image_part_rectangular(z), real_part_rectangular(z))
    }

    function make_from_real_img_rectangular(x, y) {
        return attach_tag("rectangular", pair(x, y))
    }

    function make_from_mag_ang_rectangular(r, a) {
        return attach_tag("rectangular", pair(r * Math.cos(a), r * Math.sin(a)))
    }
}

// Alisa
{
    function real_part_polar(z) {
        return magnitude_polar(z) * Math.cos(angle_polar(z))
    }

    function image_part_polar(z) {
        return magnitude_polar(z) * Math.sin(angle_polar(z))
    }

    function magnitude_polar(z) {
        return head(z)
    }
    function angle_polar(z) {
        return tail(z)
    }

    function make_from_real_imag_polar(x, y) {
        return pair(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), Math.atan2(y, x))
    }

    function make_from_mag_ang_polar(r, a) {
        return pair(r, a)
    }
}

function attach_tag(type_tag, contents) {
    return pair(type_tag, contents)
}

function type_tag(datum) {
    return is_pair(datum)
        ? head(datum)
        : throw new Error(`bad tagged datum :${datum} -- type_tag`)
}

function contents(datum) {
    return is_pair(datum)
        ? tail(datum)
        : throw new Error(`bad tagged datum :${datum} -- contents`)
}

function is_rectangular(z) {
    return type_tag(z) === "rectangular"
}

function is_polar(z) {
    return type_tag(z) === "polar"
}

function real_part(z) {
    return is_rectangular(z)
        ? real_part_rectangular(contents(z))
        : is_polar(z)
        ? real_part_polar(contents(z))
        : throw new Error(`unknown type -- real_part ${z}`)
}

function image_part(z) {
    return is_rectangular(z)
        ? image_part_rectangular(contents(z))
        : is_polar(z)
        ? image_part_polar(contents(z))
        : throw new Error(`unknown type -- image_part ${z}`)
}

function magnitude(z) {

}

function angle(z) {

}

function make_from_real_imag(x, y) {
    return make_from_real_img_rectangular(x, y)
}

function make_from_mag_ang(r, a) {
    return make_from_mag_ang_polar(r, a)
}

module.exports = { attach_tag }