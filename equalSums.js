function equalSums (arr) {

    let result = 'no';

    for(let i = 0; i < arr.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            let nextLeftNumber = arr[j];
            leftSum += nextLeftNumber;
        }

        for (let j = i + 1; j < arr.length; j++) {
            let nextRightNumber = arr[j];
            rightSum += nextRightNumber;

        }

        if(leftSum == rightSum) {
            result = i;
            break;
        }
    }

    console.log(result);
}