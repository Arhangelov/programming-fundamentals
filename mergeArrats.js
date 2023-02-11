function mergeArrays (arrayOne, arrayTwo) {
    let result = [];
    
    for (let i = 0; i < arrayOne.length; i++ ) {
        if (i % 2 !== 0) {
           result.push (arrayOne[i] + arrayTwo[i]);
        } else {
            result.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
        }
    }

    console.log(result.join(' - '));

}
mergeArrays (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])