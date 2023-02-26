function solve (numOne, numTwo, numThree) {

    let result = smallestOfThreeNumber (numOne, numTwo, numThree);

    function smallestOfThreeNumber (numOne, numTwo, numThree) {

       if (numOne < numTwo && numOne < numThree) {

        return (numOne);

       } else if (numTwo < numOne && numTwo < numThree) {

        return (numTwo);

       } else if (numThree < numOne && numThree < numTwo) {

        return (numThree) ;
       } 
        
    }

    console.log (result);

}

solve (0 , 0 , 0)