function findMax(arr) {
    let maxCount = 0, currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

console.log(findMax([1, 1, 0, 1, 1, 1]));