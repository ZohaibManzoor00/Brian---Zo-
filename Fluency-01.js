// Write a function, isCapitalized, to test the first character of a string is uppercase or not.
const isCapitalized = (string) => {
    if(string = string.slice(1) + string.toUpperCase ){
        return true
    }else{
        return false
    }

}
//this is a trail
const isCapitalizedtest1 = 'Hello' // True
const isCapitalizedtest2 = 'hello' // False
const isCapitalizedtest3 = 'hELLO' // False
console.log(isCapitalized(isCapitalizedTest1))

// Write a JavaScript function, countVowels, to count the number of vowels in a given string
const countVowels = (string) => {
    let countVowels = string.match
    Text.match(/aeiou/)
}

const countVowelsTest1 = 'Count all the vowels in this string' 
const countVowelsTest2 = 'Even with characters like : and ?'
const countVowelsTest3 = 'aeiouL' // 5
console.log(countVowels(countVowelsTest1))