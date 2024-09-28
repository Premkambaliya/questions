const num = [2,5,9,6,3]; 
let even = 0;
let odd = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        even++; 
    } else {
        odd++; 
    }
}
console.log({even}, {odd});
