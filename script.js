// Test commit push

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Password Characters Variables

var alphabetLowerCaseLibrary = 'abcdefghijklmnopqrstuvwxyz'; // Lower Case Library
var alphabetUpperCaseLibrary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  // Upper Case Library
var numericOptionsLibrary = '0123456789'; // Numeric Library
var symbolOptionsLibrary = '!@#$%^&*()_[]{}\|:;?/>.<,`~';  // Symbol Library
var charLibrary = '';
console.log('Characters sets added')

//Function Junction
//-----------------------------------------------------------------------------------------
//Builds the password Length. Breaks if numbers are not entered or the value is <8 and >128.
function passwordLength(minPasswordLength, maxPasswordLenth) {
  var lengthInt;
  while (true) {
    //Canceling out of the prompt and denies the password length if the user cancels out of the prompt.
    var length = prompt('How long do you want the password? (8 Char Min - 128 Char Max)');
    if (length === null) {
      alert('Exiting...');
      return null;
    }
    //Does not allow the user to continue until the criteria is met.
    lengthInt = parseInt(length); //converting the input to in an int to compare against criteria.
    if (isNaN(lengthInt) || lengthInt < 8 || lengthInt > 129) {
      alert('Length parameters not met. Try again');
    } else {
      break;
    }
  }
//Letting you know the password length has been accepted
  alert('Password Length has been chosen.'); // Lets user know password length has been chosen.
  console.log('Added ' + lengthInt + ' characters to random generation.');
  return lengthInt;
}

//Building the Lower Case Library if the user chooses to add then adding it to the CharLibrary; or excludes and lets user know
function lowerCaseLibrary () {
  var lowerCaseInput = confirm('Would you like lower case letters to your password?') // Asks user if they want to add Lower Case letters
  if (lowerCaseInput == true){
    alert('Lower case letters have been added.'); // Lets user know they have been added
    charLibrary += alphabetLowerCaseLibrary; // Adding the lowercase letters to the carLibary where characters will be stored to recall.
  }
  else {
    alert('Lower case letters have not beed added.') // Lets user know they have not been added.
  }
  console.log('Lower case option has been decided.'); // Logs to verify option has been chosen or denied by the user
  return lowerCaseInput;
}

//Building the Upper Case Library if the user chooses to add then adding it to the CharLibrary; or excludes and lets user know
function upperCaseLibrary () {
  var upperCaseInput = confirm('Would you like upper case letters in your password?') // Asks user if they want to add Upper Case letters
  if (upperCaseInput == true){
    alert('Upper Case letters have been added.') // Lets user know they have been added
    charLibrary += alphabetUpperCaseLibrary;
  }
  else {
    alert('Upper Case letters have not been added.') // Lets user know they have not been added.
  }
  console.log('Upper case option has been decided'); // Logs to verify option has been chosen or denied by the user
  return upperCaseInput;
}

//Building the Numeric Library if the user chooses to add then adding it to the CharLibrary; or excludes and lets user know
function numericLibrary () {
  var numericInput = confirm('Would you like numbers in your password?') // Asks user if they want to add numbers
  if (numericInput == true){
    alert('Numbers have been added.') // Lets user know they have been added
    charLibrary += numericOptionsLibrary;
  }
  else {
    alert('Numbers have not been added.') // Lets user know they have not been added.
  }
  console.log('Number option has been decided.'); // Logs to verify option has been chosen or denied by the user
  return numericInput;
}

//Building the Symbol Library if the user chooses to add then adding it to the CharLibrary; or excludes and lets user know
function symbolLibrary () {
  var symbolInput = confirm ('Would you like symbols in your password?') // Asks user if they want to add symbols 
  if (symbolInput == true){
    alert('Symbols have been added.') // Lets user know they have been added
    charLibrary += symbolOptionsLibrary; 
  }
  else {
    alert('Symbols have not been added.') // Lets user know they have not been added.
  }
  console.log('symbols option has been decided.'); 
  return symbolInput;
}


// Makes the Password
function generatePassword() {
  charLibrary = ''; // Sets the CharLibrary to empty
  var passwordLengthValue = passwordLength(8, 128); // Sets the parameters for how long the password should be. First value min, second value max
  if (passwordLengthValue === null) {
    return ""; // Return an empty string if the user cancelled the password length prompt
  }

  lowerCaseLibrary(); //exevutes the lowerCaseLibrary function
  upperCaseLibrary(); // executes the upperCaseLibrary function
  numericLibrary(); // executes the numericLibrary function
  symbolLibrary(); // symbolLibrary function

  if (charLibrary.length === 0) {
    alert('User error. You need to select at least one of the character options. Restarting password generator...'); // Alerts user theres an error, tells how to fix it and restarts password generator
    return generatePassword(); // loops back into the Generate password since none of the libraries were selected
  }

  var generatedPassword = ""; // Clears out generate password

  // for loop that generates each character randomly
  for (var i = 0; i < passwordLengthValue; i++) {
    generatedPassword += charLibrary.charAt(Math.floor(Math.random() * charLibrary.length));
  }

  return generatedPassword;
}

