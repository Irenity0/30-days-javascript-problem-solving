// 1. reverse a string 
    // to get "Anjum Afra" as result
    let str = "Afra Anjum"
    let revStr = str.split(" ").reverse().join(" ");
    console.log(revStr)

    // to get "mujnA arfA" as result
    revStr = str.split("").reverse().join("");
    console.log(revStr)
    
    // to do it without methods
    revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr = str[i]
    }
    console.log(revStr)
    

// 2. check for palindrome
    let string = "racecar";
    let revString = string.split("").reverse().join("");
    let palindrome = (revString === string) ? true : false
    console.log(palindrome)


// 3. count vowels in a string
    function countVowels(str) {
        let vowelsArr = ["a", "e", "i", "o", "u"];
        let count = 0;
        str = str.split("").forEach(item => vowelsArr.includes(item.toLowerCase()) ? count++ : count)
        return count;
    }

    console.log(countVowels("Kitler uwu"))


// 4. Capitalize first letter of each word
    function CapitalizeFirstLetter(str){
        let words = str.split(" ") // ["bonk","kitler","uwu"]
        return words.map(word => { 
            word = word.split("") // ["b", "o", "n", "k"] bla bla 
            word[0] = word[0].toUpperCase() // b = B 
            return word.join("") // "Bonk"
        }).join(" ") // ["Bonk","Kitler","Uwu"]
    }

    console.log(CapitalizeFirstLetter("bonk kitler uwu"))


// 5. Find longest word in a sentence
    // turn sentence to arr first
    // set a variable: longestword ""
    // loop the arr and if the length of the word is greater than my variable than set it as the variable

    function findLongestWord(str){
        str = str.split(" "); // ["Bonk","Kitler","uwu"]
        let longestWord = ""; // literal an empty string bro
        str.forEach(word => (word.length >= longestWord.length) ? longestWord = word : longestWord) // "Kitler"
        return longestWord // "Kitler"
    }

    console.log(findLongestWord("Bonk Kitler uwu"));