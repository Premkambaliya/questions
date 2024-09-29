function p(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return result;
}
console.log(p(10));