// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}


const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
.concat(arrayFromLowToHigh(58, 64))
.concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126));


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {

  let passwordLength = prompt("Please enter the number of characters you want for you new password. It may be between 8 and 128 characters.");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
    return alert("Invalid Response. Please try again.");
  }
  let useLowerCase = confirm("Do you want your new password to include lowercase letters?");
  if (useLowerCase === true) {
    arrayFromLowToHigh += LOWERCASE_CODES;
    console.log(arrayFromLowToHigh);
  }

  let useUpperCase = confirm("Do you want your new password to include uppercase letters?");
  if (useUpperCase === true) {
    arrayFromLowToHigh += UPPERCASE_CODES;
    console.log(arrayFromLowToHigh);
  }

  let useNumbers = confirm("Do you want your new password to include numbers?");
  if (useNumbers === true) {
    arrayFromLowToHigh += NUMBER_CODES;
    console.log(arrayFromLowToHigh);
  }

  let useSpecialCharacters = confirm("Do you want your new password to include special characters?");
  if (useSpecialCharacters === true) {
    arrayFromLowToHigh += SYMBOL_CODES;
    console.log(arrayFromLowToHigh);
  }
  let randomPassword = " ";

    for (let i = 0; i < passwordLength; i++) {
      randomPassword += arrayFromLowToHigh[Math.floor(Math.random() * (arrayFromLowToHigh.length))];
      console.log(Math.floor(Math.random() * (arrayFromLowToHigh.length)));
      console.log(randomPassword);        
      }
   return randomPassword;
  }

