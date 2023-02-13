function reveseAnArrayOfNumbers (length, array) {
    let resultArray = [];
    let output = '';

    for (let i = 1; i <= length; i++) {
        resultArray[i - 1] = array[i - 1];
    }

    for (let j = length - 1; j >= 0; j--) {
        output += resultArray[j] + ' ';
    }

    console.log (output);
}
reveseAnArrayOfNumbers (3, [10, 20, 30, 40, 50])