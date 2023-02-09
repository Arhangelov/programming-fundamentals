function maxNumber(arr) {

    let result = "";

    for (let i = 0; i < arr.length; i++) {

        let element = arr[i];
        let isBiggerEnough = true;

        for (let j = i + 1; j < arr.length; j++) {

            let nextElement = arr[j];

            if (element <= nextElement) {
                isBiggerEnough = false;
                break;
            }
        }

        if (isBiggerEnough) {
            result += `${element} `;
        }
    }
    console.log(result);
}
maxNumber ([14, 24, 3, 19, 15, 17])