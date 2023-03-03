function solve (arr) {

    let kNumber = arr.shift();

        
        let firstKNumers = arr.slice(0,kNumber);

        let lastKNumers = arr.slice((arr.length - kNumber), arr.length);
    

    console.log (firstKNumers.join(' '));
    console.log(lastKNumers.join(' '));
}
solve ([3, 
    6, 7, 8, 9, 10, 15, 16]
    )