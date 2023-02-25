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

  if (length < 8 || length > 128) {
    alert("Error: The length of a password must be at least 8 characters and no more than 128 characters");
    return "Try again";
  }

  let password = "";
  var characters = lowercase;
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
