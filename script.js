// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaForm = document.getElementById("dialog");
var formItems = document.querySelector("input");
var confirmBtn = document.getElementById("confirmBtn");
var lengthInput = document.getElementById("lengthInput");

// RANDOM NUMBER GENERATOR
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

var passVauesNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  // debugger;

  // prompt for password criteria
  if (typeof criteriaForm.showModal === "function") {
    criteriaForm.showModal();
  } else {
    alert("modal broken");
  }
  // submit prompt
  confirmBtn.addEventListener("click", function genPassBtn() {
    // pull prompt values
    passLength = document.getElementById("lengthInput").value;
    passLowChecked = document.getElementById("lwcs").checked;
    passUpChecked = document.getElementById("upcs").checked;
    passSpecChecked = document.getElementById("spch").checked;
    passNumChecked = document.getElementById("num").checked;
    console.log(
      passLowChecked + passUpChecked + passSpecChecked + passNumChecked
    );
    // check if passLength meets requirments
    if (passLength < 8 || passLength > 128) {
      // if length = <8 or >128, alert user and restart script
      console.log("too small");
      window.alert(
        "Password is too Short. Try again with a length between 8-128."
      );
      writePassword();
    }
    // if nothing is checked alert user to try again
    if (
      passLowChecked === false &&
      passUpChecked === false &&
      passNumChecked === false &&
      passSpecChecked === false
    ) {
      window.alert(
        "You must have at least one character type checked. Try again and select a charcter type."
      );
      writePassword();
    }
    // prevent page from reloading on submit and close dialog
    event.preventDefault();
    criteriaForm.close();
    // generate a password
    var generatePassword = function () {
      // create array to hold password
      var letter = [];
      // loop gen for password length
      for (i = 0; i <= passLength - 1; i++) {
        if (passLowChecked) {
          // add a random lowercase letter to array
          if (letter.length < passLength) {
            letter.push(
              passValuesLower[randomNumber(0, passValuesLower.length - 1)]
            );
          }
        }
        // add random uppercase letter to array
        if (passUpChecked) {
          if (letter.length < passLength) {
            letter.push(
              passValuesUpper[randomNumber(0, passValuesUpper.length - 1)]
            );
          }
        }
        // add random number
        if (passNumChecked) {
          if (letter.length < passLength) {
            letter.push(passVauesNum[randomNumber(0, passVauesNum.length - 1)]);
          }
        }
        // add random special character to array
        if (passSpecChecked) {
          if (letter.length < passLength) {
            letter.push(
              passValuesSpec[randomNumber(0, passValuesSpec.length - 1)]
            );
          }
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
  });
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
