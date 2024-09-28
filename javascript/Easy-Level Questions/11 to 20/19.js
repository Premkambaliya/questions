let arr = [1,2,5,3,4,];
let a = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        a = false;
        break;
    }
}

console.log(a);