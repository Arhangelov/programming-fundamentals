function solve (numOne, numTwo, operator) {

    let result = simplecalculator (numOne, numTwo, operator)

    function simplecalculator (numOne, numTwo, operator) {

        let result = (o) =>
         ((operator === 'multiply') ? numOne * numTwo:
         (operator === 'divide') ? numOne / numTwo:
         (operator === 'add' ? numOne + numTwo:
          numOne - numTwo) ); 

        return result(operator);
    }

    console.log(result)
}
solve(2, 4, 'divide')