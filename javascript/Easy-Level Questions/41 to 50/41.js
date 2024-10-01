function de(address) {
    return address.replace(/\./g, "[.]");
}

console.log(de("1.1.1.1"));