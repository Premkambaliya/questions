function get(filename) {
    return filename.split('.').pop();
}

console.log(get("document.pdf"));