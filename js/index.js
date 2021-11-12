console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Johh';
let hacker2 = 'John';

console.log(`The drivers's name is ${hacker1}. `);
console.log(`The navigator's name is ${hacker2}. `);
//console.log(hacker1.length);
//console.log(hacker2.length);
// Iteration 2: Conditionals
function longestName () {
  if (hacker1.length > hacker2.length) {
    return `The driver has the longest name, it has ${hacker1.length} characters.`;
  } else if (hacker1.length < hacker2.length) {
    return `The navigator has the longest name, it has ${hacker2.length} characters.`;
  } else {
    return `WOW, you both have equally long names, ${hacker1.length} characters!`;
  }
}
console.log(longestName(hacker1,hacker2))


// Iteration 3: Loops
function upperCase(str) {
    for (let letter of hacker1) {
      return str.toUpperCase().split('').join(' ');
  }
}
console.log(upperCase(hacker1));

function reverseString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i-=1) {
        o += str[i];
    }
    return o;
}
console.log(reverseString(hacker1));
/*

3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?

*/