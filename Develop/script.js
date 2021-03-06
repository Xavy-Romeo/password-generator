// Assignment code here

// Create all possible characters for password
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var symbol = '~!@#$%^&*()_';

var charsAvailable = '';

function generatePassword() {
  howManyChars();
  
  //??? Where to enter generated password???//
  //passwordText.value = "test";
  //password.setItem("test");
  //password = document.write("test")
  
  // for loop for how many Characters
      // for (i = 0; i < numbOfChars; i++){}

}

// Ask User how many characters they would like in their password
function howManyChars(numOfChars) {
  var numOfChars = prompt('How many characters would you like in your password? Please enter a number between "8" and "128".')
  
  if (numOfChars >= 8 && numOfChars <= 128) {
    passwordOptions();
  }
  else {
    alert('Please enter a valid option.');
    howManyChars();
  }
}

function passwordOptions() {
  // Ask User what type of characters they would like in their password
  var passOptWant = prompt('What would you like in your randomly generated password? Type all that apply. Type "U" for uppercase letters, "L" for lowercase letters, "N" for numbers, and "S" for symbols.');
  passOptWant = passOptWant.toLowerCase();
  
  //vars for if statements
  var great = "Great. Your password will be randomly generated. :)";
  var u = passOptWant.includes('u');
  var l = passOptWant.includes('l');
  var n = passOptWant.includes('n');
  var s = passOptWant.includes('s');
  
  
}
  
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
