function rounding (num,round) {
    let roundingNumber = 0;

    if (round >= 0 && round <= 15) {
      roundingNumber = num.toFixed(round);
    } else {
        roundingNumber = num.toFixed(15);
    }
    console.log (parseFloat(roundingNumber))
}

rounding (10.500000000000, 2)