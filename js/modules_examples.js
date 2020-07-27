/*Author: Sailendra
Purpose: JavaScript Nodejs built-in Modules & Examples
date: 23/08/2020 */

const fs = require('fs');
let text = fs.readFileSync('del.txt', 'utf-8');
text = text.replace('some', 'sailendra');
console.log(text);

console.log('Creating new file: ')
fs.writeFileSync('sai.txt', text);