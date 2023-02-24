function repeatString (string, number) {
    let result = "";

    for(let i = 0; i < number; i++ ) {
        result += string;
    }
    return result;
}

let outputOfRepatString = repeatString ('abc',3);
console.log(outputOfRepatString);