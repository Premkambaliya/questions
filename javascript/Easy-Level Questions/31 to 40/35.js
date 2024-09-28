function printInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        console.log('* '.repeat(i));
    }
}


const n = 5;
printInvertedTriangle(n);