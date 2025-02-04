console.log("I'm ready");
//Iteration 1: Names and Input

let hacker1 = "Jeroen van Bart";

console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Jamal Nasser";

console.log(`The navigator's name is ${hacker2}`);

//jeroen van bart
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Jeroen van Bart
let Hacker1UpperCase = hacker1.toUpperCase();
let betweenLetters = " ";

console.log(Hacker1UpperCase.split("").join(betweenLetters));

//Jeroen van Bart
let stringReverse = hacker1.split("").reverse().join("");
console.log(stringReverse);

//jeroen van bart
if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

const textOne = "What is Lorem Ipsum?";

function cleanText(text) {
  let lowwerCaseText = "";
  lowwerCaseText = text.toUpperCase;
  return lowwerCaseText;
}

console.log(cleanText(textOne));

//jeroen van bart
let randomText = `"What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32."`;

//Jeroen van Bart
function WordCount(str) {
  let words = str.split(" ").length;
  console.log(words);
}
WordCount(randomText);
console.log(randomText.indexOf("et"));

const palindromeText = "A man, a plan, a canal. Panama";

// function palindrome(string) {
//   let strLength = string.length;
//   for (let i=0; i < strLength /2; i++){
//     if (string[i] !==string[strLength-1-i]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindrome(palindromeText));

// function palindrome(str) {
//   let re = /[\W_]/g;
//   let lowRegStr = str.toLowerCase().replace(re, "");
//   let reverseStr = lowRegStr.split("").reverse().join("");
//   return reverseStr === lowRegStr;
// }

// console.log(palindrome(palindromeText));


const palindrome = (str) => {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

console.log(palindrome(palindromeText));