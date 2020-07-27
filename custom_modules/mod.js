/*Author: Sailendra
Purpose: JavaScript custom Modules
date: 27/08/2020 */

console.log('This is modules file.');

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum = + element;
    });
    return sum / arr.length;
};
module.exports = {
    avg: average,
    name: "sai",
    age: 90
};