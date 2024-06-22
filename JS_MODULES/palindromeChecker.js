function palindrome(str) {

    str = str.toLowerCase().replace(/[\W_]/g, '');
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
        if (str[i] !== str[len - i]) {
            return "Not a palindrome string";
        }
    }
    return "Yes! Palindrome String";
}
console.log(palindrome("racecar"));