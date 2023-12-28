// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
let Kalvian1 = "XXXX";
console.log("The driver's name is", Kalvian1)
let Kalvian2 = "YYYY";
console.log("The navigator's name is", Kalvian2)
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let len1 = Kalvian1.length;
let len2 = Kalvian2.length;

if(len1 > len2){
  console.log(`The driver has the longest name, it has ${len1} characters.`)
}else if(len2 > len1) {
  console.log(`The driver has the longest name, it has ${len2} characters.`)
}else{
  console.log(`Wow, you both have equally long names, ${len1} characters!`)
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function containsVowelsAndCountChars(s) {
  let vowelCount = 0;
  let upperCount = 0;
  let lowerCount = 0;

  for(let i = 0; i < s.length; i++){
    const char = s[i];
    if ("aeiouAEIOU".includes(char)){
      vowelCount++;
    }
    if (char === char.toUpperCase() && char !== char.toLowerCase()){
      upperCount++;
    }else if (char === char.toUpperCase() && char !== char.toLowerCase()){
      upperCount++;
  }
}

if (vowelCount > 0) {
  console.log(`${s} ${vowelIndices.join(' ')}`)
} else {
  console.log("No vowels")

  console.log("Number of uppercase characters:", upperCount);
  console.log("Number of lowercase characters:", lowerCount);
}
}

containsVowelsAndCountChars(Kalvian1)
containsVowelsAndCountChars(Kalvian2)

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

function printallchar(x) {
  let capitalizedName = "";
  for(let i = 0; i < x.length; i++){
    capitalizedName += x[i].toUpperCase();
  }
  console.log(capitalizedName)
}
printallchar(Kalvian1)
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
function printallcharreverse(x) {
  let reverse = "";
  for(let i = x.length -1; i >= 0;  i--){
    reverse += x[i];
  }
  console.log(reverse)
}
printallcharreverse(Kalvian2)
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

function joinbothname(x, y) {
  console.log(x, y);
  console.log(y, x);
}

joinbothname(Kalvian1, Kalvian2)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?


function comparelexico(x, y){
  const result = x.localeCompare(y);

  if (result < 0) {
    console.log("The driver's name goes first.")
  } else if (result > 0) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console,log("What?! You both have the same name?")
  }
}

comparelexico(Kalvian1, Kalvian2)

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon"
// Given string to check for palindrome
const arrayOfCharacters = "MadaM".split("");

const reversedArray = arrayOfCharacters.slice().reverse();

if (reversedArray.join("") === arrayOfCharacters.join("")) {
  console.log("Palindrome");
} else {
  console.log("NO");
}



// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 