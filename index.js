//How to Uppercase the First Letter in a Word with JS
//method 1

// const name = "vikas";
// const uppercase = name.charAt(0).toUpperCase();
// // const remainingLetters = name.substring(1);
// const remainingLetters = name.slice(1);
// const capsWord = uppercase + remainingLetters;
// console.log(capsWord);

// mothod 2

// const capsWord1 = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(capsWord1);

// fucntion (word)
const getCapsString = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return null;
};

// console.log(getCapsString("gdsffgshkjd"));

// for a sentence
name = "vikas kumar";
//output Vikas Kumar
const getCapsSentence = (sentence) =>
  sentence
    .split(" ")
    .map((word) => getCapsString(word))
    .join(" ");

console.log(getCapsSentence("vikas kumar vishwakarma"));
