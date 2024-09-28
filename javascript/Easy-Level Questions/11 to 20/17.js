const num = [1,-2,3,-4,5,-6]; 
let pos = 0;
let neg = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i]>0) {
        pos++; 
    } else {
        neg++; 
    }
}
console.log({pos}, {neg});
