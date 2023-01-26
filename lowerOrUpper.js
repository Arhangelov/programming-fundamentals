function lowerOrUpper (char) {

    let charVlaue = char.charCodeAt(0);

    if (charVlaue >= 65 && charVlaue <= 90) {
        console.log ('upper-case');
    } else if (charVlaue >= 97 && charVlaue <= 122) {
        console.log (`lower-case`);
    }
}
lowerOrUpper ('L')