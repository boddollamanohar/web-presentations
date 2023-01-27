/* let salary =74000;
let message = 75000 > salary ? "eligible for marriage" : "no";
console.log (message); */

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
console.log(reverseString('hello'));
reverseString('manohar');
console.log(reverseString('manohar'));