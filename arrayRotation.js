// Без вградени функции
function arrayRotation(arr, num) {
    let numOfRotations = num % arr.length;
    let rotatedArr = [];
    let result = "";

    for (let i = numOfRotations; i < arr.length; i++) {
        rotatedArr += arr[i] + " ";
    }

    for (let i = 0; i < numOfRotations; i++) {
        rotatedArr += arr[i] + " ";
    }
    console.log(rotatedArr)

}
arrayRotation([51, 47, 32, 61, 21], 2)

// С вградени функции
function arrayRotation(arr, num) {
    let numOfRotations = num % arr.length;
    let rotatedArr = [];
    let result = "";

    for (let i = numOfRotations; i < arr.length; i++) {
        rotatedArr.push (arr[i]);
    }

    for (let i = 0; i < numOfRotations; i++) {
        rotatedArr.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        result += rotatedArr[i] + " ";
    }
    console.log(result);

}
arrayRotation([51, 47, 32, 61, 21], 2)