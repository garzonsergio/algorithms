//En una lengua alienigena se ha descubierto un alfabeto que contiene un orden diferente al alfabeto latino.

//Dada la secuencia de palabras en el alfabeto alienigena, escribe una función que devuelva
// verdadero si y solo si las palabras están ordenadas alfabéticamente en el alfabeto alienigena.

let words = ["handlecomb", "handle", "smile"];
const order = "hlabcdefgijkmnopqrstuvwxyz";

//My Solution
function isAlienSorted(words, order) {
  //Create a dictionary with the order of the alphabet
  let alphabet = {};

  const alphabetSplited = order.split("");

  for (let letter in alphabetSplited) {
    alphabet[alphabetSplited[letter]] = parseInt(letter);
  }

  //Check if the words are sorted
  function compareWords(word1, word2) {
    let compareLength = Math.min(word1.length, word2.length)

    for (let k = 0; k < compareLength; k++) {
      let p1 = alphabet[word1[k]]
      let p2 = alphabet[word2[k]]

      if (p1 < p2) {
        return true
      }
      else if (p1 > p2) {
        return false
      }
    }
    return word1.length <= word2.length

  }

  for (let i = 0; i < words.length - 1; i++) {
    if (compareWords(words[i], words[i + 1]) === false) {
      return false
    }
  }
  return true
}

// let isSorted = true;

// for (let i = 0; i < words.length - 1; i++) {
//   let isShorterFirst = true;
//   let word1 = words[i];
//   let word2 = words[i + 1];
//   let compareLength = Math.min(word1.length, word2.length);

//   if (word1.length > word2.length) {
//     isShorterFirst = false;
//   }
//   for (let k = 0; k < compareLength; k++) {
//     let p1 = alphabet[word1[k]];
//     let p2 = alphabet[word2[k]];

//     if (p1 < p2) {
//       isSorted = true;
//       break;
//     } else if (p1 > p2) {
//       isSorted = false;
//       break;
//     } else if (p1 === p2 && !isShorterFirst) {
//       isSorted = false;
//     }
//   }
//   if (!isSorted) {
//     break;
//   }
// }
// console.log("response", isSorted);
// return isSorted;

console.log("modularized", isAlienSorted(words, order));

//Solution of Teacher
var isAlienSorted2 = function (words, order) {
  // Create a map of alien dictionary
  mapa_diccionario = new Map();
  for (let i = 0; i < order.length; i++) {
    mapa_diccionario[order[i]] = i;
  } // {a:0, b:1, ...}

  //Check the order of the words
  for (let i = 1; i < words.length; i++) { //T= O(n * longitud de la palabra mas larga) == O(n) ; S = O(m)
    if ((comparar(words[i - 1], words[i]) == false)) {
      return false;
    }
  }
  return true;
};

// O(longitud de la palabra mas larga)
let comparar = function (word1, word2) {
  const longitud = Math.min(word1.length, word2.length);
  for (let i = 0; i < longitud; i++) {
    if (mapa_diccionario[word1[i]] < mapa_diccionario[word2[i]]) {
      return true;
    } else if (mapa_diccionario[word1[i]] > mapa_diccionario[word2[i]]) {
      return false;
    }
  }
  return word1.length <= word2.length;
};

console.log(isAlienSorted2(words, order));


