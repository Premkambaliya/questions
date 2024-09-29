function isValidBrackets(str) {
    const stack = [];
    const map = { '(': ')', '{': '}', '[': ']' };
    for (let char of str) {
        if (map[char]) {
            stack.push(map[char]);
        } else if (char !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}


console.log(isValidBrackets("{[()]}"));