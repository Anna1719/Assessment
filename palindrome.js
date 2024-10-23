function isPalindrome(str) {
  // Приводим строку к нижнему регистру и удаляем лишнее
  const cleanedStr = str.toLowerCase().replace(/[^a-zа-я0-9]/g, "");

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

// Примеры 
console.log("--- Palindrome ---");
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Привет")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false
