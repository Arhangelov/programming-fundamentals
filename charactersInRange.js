function solve (charOne, charTwo) {

    let result = charactersInRange (charOne, charTwo) 
    
    function charactersInRange(charOne, charTwo) {

        let result = [];
        let startingElement = 0;
        let endingElement = 0;

        let charOneCode = charOne.charCodeAt(0);
        let charTwoCode = charTwo.charCodeAt(0);

        if (charOneCode > charTwoCode) {
            startingElement += charTwoCode;
            endingElement += charOneCode;
        } else {
            startingElement += charOneCode;
            endingElement += charTwoCode;
        }

        for (let i = startingElement + 1; i < endingElement; i++) {
            result.push (String.fromCharCode(i));
        }
        return result.join(" ");
    }
    console.log(result);
}

solve ('C', '#')