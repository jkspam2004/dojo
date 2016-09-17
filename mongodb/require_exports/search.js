var dictionary = require('./dictionary.js');
console.log("dictionary", dictionary);
function search(word, dictionary) {
  console.log("word=", word);
  for(w in dictionary) {
    console.log("dict word=", dictionary[w]);
    if (dictionary[w] == word) {
      return true;
    }
  }
  return false;
}

var answer = search("apple", dictionary);
console.log(answer);
