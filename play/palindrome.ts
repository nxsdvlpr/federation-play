const recursivePalindrome = (text: string, index: number): boolean => {
  if (index < Math.floor(text.length / 2)) {
    let firstChar = index;
    let lastChar = text.length - index - 1;
    if (text.charAt(firstChar) !== text.charAt(lastChar)) {
      return false;
    } else {
      return recursivePalindrome(text, index + 1);
    }
  }

  return true;
};

export const palindrome = (string: string = ''): boolean => {
  // let reversed: Array<String> = [];
  // for (let i = string.length - 1; i >= 0; i--) {
  //   reversed.push(string.charAt(i));
  // }
  // return string === reversed.join('');

  // for (let i = 0; i < Math.floor(string.length / 2); i++) {
  //   let firstChar = i;
  //   let lastChar = string.length - i - 1;
  //   if (string.charAt(firstChar) !== string.charAt(lastChar)) {
  //     return false;
  //   }
  // }

  // return true;

  return recursivePalindrome(string, 0);
};

console.log(palindrome('a'));
console.log(palindrome('aba'));
console.log(palindrome('kodok'));
console.log(palindrome(''));

console.log(palindrome('ab'));
console.log(palindrome('abab'));
console.log(palindrome('kodcok'));
console.log(palindrome('hehe'));
