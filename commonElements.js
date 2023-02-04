function commonElements (arrayOne, arrayTwo) {

    for (let i = 0; i <= arrayOne.length - 1; i++) {

        let elementsArrayOne = arrayOne[i];

            for  (let j = 0; j <= arrayTwo.length - 1; j++) {
                
                let elementsArrayTwo = arrayTwo[j];
                if (elementsArrayOne === elementsArrayTwo) {
                    console.log(elementsArrayTwo);
                }
            }
    }
    
}
commonElements (['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])