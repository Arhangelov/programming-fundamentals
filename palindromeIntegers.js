function solve (array) {

    for(let number of array) {
        let reversedNumber = plaindromeIntegres (number);
        console.log (number === reversedNumber);
    }

    function plaindromeIntegres (number) {

        let reverseNumber = '';

        while(number > 0) {
            let lastDigit = number % 10;
            reverseNumber += lastDigit;
            number = parseInt((number/10));
        }

        return Number(reverseNumber);
    }
}
solve ([123,323,421,121]);