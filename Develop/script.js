// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};
// password potential values
var passValuesLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var passValuesUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var passValuesSpec = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "\\",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "|",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// password legnth
var passLength = parseInt("10");

// Write password to the #password input
function writePassword() {
  // debugger;
  // generate a password
  var generatePassword = function () {
    // create array to hold password
    var letter = [];
    // loop gen for password length
    for (i = 0; i <= passLength - 1; i++) {
      // add a random lowercase letter to array
      if (randomNumber(1, 10) <= 4 && letter.length < passLength) {
        letter.push(
          passValuesLower[randomNumber(0, passValuesLower.length - 1)]
        );
      } else if (randomNumber(1, 10) <= 7 && letter.length < passLength) {
        letter.push(
          passValuesUpper[randomNumber(0, passValuesUpper.length - 1)]
        );
      } else if (letter.length < passLength) {
        letter.push(passValuesSpec[randomNumber(0, passValuesSpec.length - 1)]);
      }
      console.log(letter);
    }
    // join password array into string the return string
    letter = letter.join("");
    return letter;
  };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
