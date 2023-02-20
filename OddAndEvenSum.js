function oddAndEvenSum (num) {

    let number = [];

    let evenSum = 0 ;
    let oddSum = 0;

    let numToString = String(num)

    for (let i = 0; i < numToString.length; i++) {
        number.push(numToString[i]);
    }

    for (let i = 0; i <number.length; i++) {
        let StringToNum = Number(number[i]);

        if (StringToNum % 2 != 0) {
            oddSum += StringToNum;
        } else {
            evenSum += StringToNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum (1000435)
