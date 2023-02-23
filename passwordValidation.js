function length (pass) {

    let isValid = false;
    let length = pass.length;

    if (length > 6 && length < 10) {
        isValid = true;
    } else {
        return 'Password must be between 6 and 10 characters';
    }

    let runConsist = consist (pass);

    function consist (pass) {

    for (let elements of pass) {

        let code = elements.charCodeAt(0);

        if ((code > 48 && code <57) || (code > 65 && code < 90) || (code > 97 && code < 122)) {
            isValid = true;
        } else {
            return 'Password must consist only of letters and digits';
        }
    }
    }

    let runMustHave = mustHave(pass);

    function mustHave (pass) {
        let counterDigits = 0;

        for (let elements of pass) {

            let code = elements.charCodeAt(0);
    
            if ((code > 48 && code < 57)) {
                counterDigits ++;
            }

            if (counterDigits < 2) {
                return 'Password must have at least 2 digits'
            }

        }
    }



    if (isValid) {
        console.log ('Password is valid');
    }

    console.log(runConsist);
    console.log(runMustHave);
}
length ('Pa$s%s')