function solve (number, power) {

    let result = mathPower(number, power);
    
    function mathPower (number, power) {
        let multiply = number;

        for (let i = 1; i < power; i++) {
            multiply *= number;
        }
        return multiply;
    }
    console.log (result);
}

solve (2, 8)