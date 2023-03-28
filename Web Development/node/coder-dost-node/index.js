const { sum, diff } = require('./lib')
const fs = require('fs')

fs.readFile('demo.txt', 'utf-8', (err, txt) => {
    console.log(txt)
});

console.log(sum(4, 5), diff(9, 4))
