var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your first no '));
let b=readlineSync.question('enter your name')
let product=a*b
console.log('product of',a,"and ",b," = ",product);
