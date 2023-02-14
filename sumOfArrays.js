function sumOfArrays (stringArray) {
    let firstElement = Number(stringArray[0]);
    let lastElement = Number(stringArray[stringArray.length -1]);

    console.log(firstElement + lastElement);
}
sumOfArrays (['10', '17', '22', '33'])