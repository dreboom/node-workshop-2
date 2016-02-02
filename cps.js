// exercise 1 - write your function from the Basic JavaScript workshop that returns the first character of a string using CPS

/* old way

var str = "hello";
//returns the first character of a string
var firstChar = function(arg) {
    return arg.charAt(0);
}
var firstLetter = firstChar(str);
var message = firstLetter + " is the first letter of " + str;
console.log(str);
console.log(firstLetter);
console.log(message);

*/

// new way 

// function getFirst (phrase,cc) { 
//   cc (phrase.charAt(0));
// }

// getFirst("hello", function(phrase){
//     console.log(phrase);
// });



// exercise 2 - Create a CPS function that returns the last character of a string

//old way:

// var lastChar = function(arg) {
//     return arg.charAt(strlength -1)
// }
// var lastLetter = lastChar(str);
// console.log(lastLetter);
// var message2 = lastLetter + " is the last letter of " + str
// console.log(message2);


// new way:

// function getLast (phrase,cc) { 
//   cc (phrase.charAt(phrase.length-1));
// }

// getLast("hello", function(phrase){
//     console.log(phrase);
// });


//exercise 3 - Your function should use the two previous functions you created to "return" a string that contains both the first and last character of the initial string

// function getFirstAndLast (newStr, cc) {
//     cc (String(newStr[0]) + String(newStr.slice(-1)));
// }


// getFirstAndLast("hello", function(newStr) { 
//     console.log(newStr); 
// });

//exercise 4 - Using npm init, initialize your project any way you like.

// exercise 5 - Using the nano text editor, create a file at the root of your project called .gitignore - n this file, write one line that says node_modules, and save the file

