const num = [5,8,96,1,4];
const n = num.length;


for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (num[j] > num[j + 1]) {
            
            const temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
        }
    }
}

console.log(num.join(", "));
