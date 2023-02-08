function magicSum (arr, number) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currnetElemnt = arr[i];

        for(let index = i + 1; index < arr.length; index++) {
            let nextElement = arr[index];
            let isMagic = (currnetElemnt + nextElement) === number;
            let possibleSequence = `${nextElement} ${currnetElemnt}`;

            if ((isMagic)) {
                result.push(`${currnetElemnt} ${nextElement}`)
            }
        }
    }
    console.log(result.join ('\n'));

}