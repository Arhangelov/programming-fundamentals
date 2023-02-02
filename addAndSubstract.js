function solve (numOne, numTwo, numThree) {

    let result = addAndSubstract (numOne, numTwo, numThree);

    function addAndSubstract (numOne, numTwo, numThree) {
        let addResult = numOne + numTwo;

        let substraction = substract(numThree);

        function substract (numThree) {
            let substractResult = addResult - numThree;
            return substractResult;
        }

        return substraction;
    }

    console.log(result);
}
solve (23, 6, 10)