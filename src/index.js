function greeting(name) {
    return `Hello, ${name}!`;
}

console.log(greeting(process.argv[2] || 'World'));
