function findLong(sentence) {
    return sentence.split(' ').reduce((longest, currentWord) => {
        if (currentWord.length > longest.length) {
            longest = currentWord;
        }
        return longest;
    }, "");
}

console.log(findLong("I love programming in JavaScript"));