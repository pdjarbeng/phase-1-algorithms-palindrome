function isPalindrome(word) {
  // Write your algorithm here

for (let l = 0; l < word.length / 2; l++) {
  const m = word.length - 1 - l;
  if (word[l] !== word[m]) return false;
}

return true;
}


// let start =0
// let finish = word.length -1

// while (start < finish) { 
//   if(word[start++] != word[finish--]) {
//     return false

//   }
// }
// return true
// }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
