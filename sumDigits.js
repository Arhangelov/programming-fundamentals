function sumDigits (numbers) {
    let result = 0;
    numbers = numbers.toString();

    for(let i = 0; i < numbers.length; i++) {
        result += Number(numbers[i]);
    }
    console.log(result);
}

sumDigits(245678)