function printNthElementh (arr) {
    let steps = arr[arr.length - 1];
    let result = [];
    console.log(steps);

    for (let i = 0; i < arr.length - 1; i+=steps) {
        result.push(arr[i]);
    }
console.log(result);
}
printNthElementh (['5', '20', '31', '4', '20', '2'])