// Assignment code here
var generatePassword = function() {
  localStorage.clear();
  // WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128
  var passwordLength = window.prompt("Choose a password length between 8 and 128 characters.");
  console.log(passwordLength);

  
  // validated password length entered by user
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    window.alert("You did not enter a valid length. Please try again.")
    generatePassword();
  }

  // WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var confirmLowerCase = window.confirm("Would you like to include lowercase letters?");
  console.log(confirmLowerCase);
  if (confirmLowerCase) {
    localStorage.setItem ('lowercase','abcdefghijklmnopqrstuvwxyz');
  } else {
    localStorage.setItem ('lowercase','');
  };

  var confirmUpperCase = window.confirm("Would you like to include uppercase letters?");
  console.log(confirmUpperCase);
  if (confirmUpperCase) {
    localStorage.setItem ('uppercase', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  } else {
    localStorage.setItem ('uppercase','');
  };

  var confirmNumeric  = window.confirm("Would you like to include numbers?");
  console.log(confirmNumeric);
  if (confirmNumeric) {
    localStorage.setItem ('number', '0123456789');
  } else {
    localStorage.setItem ('number','');
  };

  var confirmSpecialChar = window.confirm("Would you like to include special characters?");
  console.log(confirmSpecialChar);
  if (confirmSpecialChar) {
    localStorage.setItem ('character', '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');
  } else {
    localStorage.setItem ('character','');
  };

  // WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
  if (localStorage.length == 0) {
    window.alert("At least one character type should be selected.");
    generatePassword();
  }
  // WHEN all prompts are answered THEN a password is generated that matches the selected criteria
  // WHEN the password is generated THEN the password is either displayed in an alert or written to the page
  var setPassword = function () {
    var passwordNew = '';
    var randomChars = localStorage.getItem('lowercase') + localStorage.getItem('uppercase') + localStorage.getItem('number') + localStorage.getItem('character');
    
    console.log(randomChars);

    for (i = 0; i < passwordLength; i++) {
      passwordNew += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      console.log(passwordNew);
    }
    return passwordNew; 
  }
  return setPassword();
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
