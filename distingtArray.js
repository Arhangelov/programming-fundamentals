function solve (input) {

    let outpustArr = [];

    for (let element of input) {
        if (!outpustArr.includes(element)){
            outpustArr.push(element);
        }
    }

    console.log (outpustArr.join(' '));
}