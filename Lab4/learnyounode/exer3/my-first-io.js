const fs = require('fs');
const path = process.argv[2];

let data = fs.readFileSync(`${path}`);
let stringCount = (data.toString().split('\n').length) - 1;
console.log(stringCount);