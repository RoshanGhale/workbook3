let name = "Roshan Ghale";
let positionOfSpace = name.indexOf(" ");
console.log(positionOfSpace);

let first = name.substring(0, positionOfSpace);
console.log(first);

let last = name.substring(positionOfSpace + 1);
console.log(last);

let message = `Your first name is ${first} and your last name is ${last}`;
console.log(message);
