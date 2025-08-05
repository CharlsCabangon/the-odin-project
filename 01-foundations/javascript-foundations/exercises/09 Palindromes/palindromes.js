
// THIS SOLUTION IS FROM CHATGPT, BUT THE IDEA CAME FROM ME
const palindromes = function(string) {
    // Convert the string to lower case to ignore case sensitivity
    str = str.toLowerCase();

    // Loop through half of the string
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        // Compare characters from the beginning and the end
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false;  // If characters don't match, it's not a palindrome
        }
    }
return true;  // If loop completes, the string is a palindrome
};

// Do not edit below this line
module.exports = palindromes;
