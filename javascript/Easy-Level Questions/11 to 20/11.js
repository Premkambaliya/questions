let arr=[1, 2, 2, 3, 4, 4, 5];
let empty = [];

for(let i=0; i<arr.length; i++){
    if(!empty.includes(arr[i])){
        empty.push(arr[i])
    }
}
console.log(empty);