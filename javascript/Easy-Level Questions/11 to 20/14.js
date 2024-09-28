const num = [1, 2, 3, 4]; 
const newelement = 0; 


const updatednum = new Array(num.length + 1);
updatednum[0] = newelement;

for (let i = 0; i < num.length; i++) {
    updatednum[i + 1] = num[i];
}
console.log(updatednum.join(","));