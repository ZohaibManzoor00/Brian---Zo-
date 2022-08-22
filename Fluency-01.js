// Write a function, isCapitalized, to test the first character of a string is uppercase or not.
const isCapitalized = (string) => {
  if (string[0] === string[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

const isCapitalizedtest1 = "Hello"; // True
const isCapitalizedtest2 = "hello"; // False
const isCapitalizedtest3 = "hELLO"; // False
console.log(isCapitalized(isCapitalizedtest2));

// Write a JavaScript function, countVowels, to count the number of vowels in a given string
const countVowels = (string) => {
  let vowelsCount = 0;
  for (let i = 0; i < string.length; i++) {
    const cur = string[i];
    console.log(cur);
    if (
      cur === "a" ||
      cur === "e" ||
      cur === "i" ||
      cur === "u" ||
      cur === "o"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

const countVowelsTest1 = "Count all the vowels in this string";
const countVowelsTest2 = "Even with characters like : and ?";
const countVowelsTest3 = "aeiouL"; // 5
console.log(countVowels(countVowelsTest2));
