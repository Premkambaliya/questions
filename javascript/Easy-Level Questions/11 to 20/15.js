let nums = [1, 2, 3, 4, 5]; 
let n = nums.length; 


n--; 


const updatedNums = new Array(n);
for (let i = 0; i < n; i++) {
    updatedNums[i] = nums[i];
}

console.log("Updated array:", updatedNums.join(", "));
