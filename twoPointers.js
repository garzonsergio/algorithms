//En una lengua alienigena se ha descubierto un alfabeto que contiene un orden diferente al alfabeto latino.

//Dada la secuencia de palabras en el alfabeto alienigena, escribe una función que devuelva
// verdadero si y solo si las palabras están ordenadas alfabéticamente en el alfabeto alienigena.

let words = ["cono","conocimiento"];
const order = "hlabcdefgijkmnopqrstuvwxyz";


function isAlienSorted(words, order) {
  let alphabet = {};
  const alphabetSplited = order.split("");


  for (let letter in alphabetSplited) {
    alphabet[alphabetSplited[letter]] = parseInt(letter);
  }

  let isSorted = true;

  for (let i = 0; i < words.length - 1; i++) {
    let isShorterFirst = true;
    let word1 = words[i];
    let word2 = words[i + 1];
    let compareLength = Math.min(word1.length, word2.length);

    if (word1.length > word2.length) {
      isShorterFirst = false;
    }
    for (let k = 0; k < compareLength; k++) {
      let p1 = alphabet[word1[k]];
      let p2 = alphabet[word2[k]];
      
      if (p1 < p2) {
        isSorted = true;
        break;
      } else if (p1 > p2) {
        isSorted = false;
        break;
      } else if (p1 === p2 && !isShorterFirst) {
        isSorted = false;
      }
    }
    if (!isSorted) {
      break;
    }
  }
  console.log("response", isSorted);
  return isSorted;
}
isAlienSorted(words, order);
