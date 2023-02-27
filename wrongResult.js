// Ne e dovursheno

function solve (numOne, numTwo, numThree) {

    let result = wrongResult (numOne, numTwo, numThree);

    function wrongResult (numOne, numTwo, numThree) {
        let result = "";
        (numOne >= 0 && numTwo >= 0 && numThree >= 0) ? (result = "Positive") : (result = "Negative");
        return result;
    }

    console.log (result)
}

solve(-1, 0, 1)