function sumEvenOddDigits(n) {
    let evenSum=0;
    let oddSum=0; 

    for (let digit of String(n)) {
        const num = Number(digit);


        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    return [evenSum, oddSum];
}


const n = 132456;
const [evenSum, oddSum] = sumEvenOddDigits(n);
console.log(evenSum, oddSum);
