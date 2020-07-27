/*Author: Sailendra
Purpose: JavaScript Sync
date: 23/08/2020 */

/*Synchronous or blocking - line by line exectuion


Asynchronous or non-blocking - line by line exectuion not guranteed */
//example:
const fs = require('fs');
fs.readFile('del.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('This is message!');