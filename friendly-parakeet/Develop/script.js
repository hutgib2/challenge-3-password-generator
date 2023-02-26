// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "01234556789";
  var specialcharacters =" !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  var length = prompt("Enter the length of the password.\n\n\
The length of a password must be at least 8 characters and no more than 128 characters");

  if (isNaN(length)) {
    var errorMsg = "EError: The length must be a number";
    alert(errorMsg);
    return "Try again";
  }

  if (length < 8 || length > 128) {
    var errorMsg = "Error: The length of a password must be at least 8 characters and no more than 128 characters";
    alert(errorMsg);
    return "Try again";
  }

  let characters = "";

  var lowercaseAnswer = prompt("The character types are lowercase, uppercase, numeric, and/or special characters.\n\n\
Would you like to include lowercase? (yes/no)");

  if (lowercaseAnswer != "yes" && lowercaseAnswer != "no") {
    var errorMsg = "Error: Answer is not yes or no";
    alert(errorMsg);
    return "Try again";
  }

  // if they answer yet, add lowercase letters to the characters string
  if (lowercaseAnswer == "yes")
    characters += lowercase

  var uppercaseAnswer = prompt("The character types are lowercase, uppercase, numeric, and/or special characters.\n\n\
Would you like to include uppercase? (yes/no)");

if (uppercaseAnswer != "yes" && lowercaseAnswer != "no") {
  var errorMsg = "Error: Answer is not yes or no";
  alert(errorMsg);
  return "Try again";
}

  // if they answer yet, add these letters to the characters string
  if (uppercaseAnswer == "yes")
    characters += uppercase

  var numberAnswer = prompt("The character types are lowercase, uppercase, numeric, and/or special characters.\n\n\
Would you like to include numbers? (yes/no)");

if (numberAnswer != "yes" && numberAnswer != "no") {
  var errorMsg = "Error: Answer is not yes or no";
  alert(errorMsg);
  return "Try again";
}
  
  // if they answer yet, add these letters to the characters string
  if (numberAnswer == "yes")
    characters += numeric

  var specialcharactersAnswer = prompt("The character types are lowercase, uppercase, numeric, and/or special characters.\n\n\
Would you like to include special characters? (yes/no)");

  if (specialcharactersAnswer != "yes" && specialcharactersAnswer != "no") {
    var errorMsg = "Error: Answer is not yes or no";
    alert(errorMsg);
    return "Try again";
  }
  
  // if they answer yet, add these letters to the characters string
  if (specialcharactersAnswer == "yes")
    characters += specialcharacters

  let password = "";
  var numOfCharacters = characters.length;

  let i = 0;
  while (i < length) {
    password += characters.charAt(Math.floor(Math.random() * numOfCharacters));
    i += 1;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
