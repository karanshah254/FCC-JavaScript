function telephoneCheck(str) {
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return "Valid Number";
    }
    else {
        return rex2.test(str) ? "Valid Number" : "Invalid Number"
    }
}


console.log(telephoneCheck("555-555-5555"));