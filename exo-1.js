let input = "a3b2c4a12";
function decompress(input) {
  let decompressed = "";
  let i = 0;

  while (i < input.length) {
    let lettre = input[i];
    i++;


    if (typeof lettre === "string") {
      let Nombre = "";

    
      while (i < input.length && !isNaN(input[i])) {
        Nombre += input[i];
        i++;
      }

      let count = Number(Nombre);
      decompressed += lettre.repeat(count);
    }
  }

  return decompressed;
}


function mostFrequentLetter(str) {
  let lettres = {};

  for (let l of str) {
    lettres[l] = (lettres[l] || 0) + 1;
  }

 return Object.keys(lettres).reduce(function(a, b) {
  if (lettres[a] > lettres[b]) {
    return a;
  } else {
    return b;
  }
})

}

function countUniqueLetters(str) {
  let UniqLettre = new Set(str); 
  return UniqLettre.size;
}



let result = {
  decompressed: decompress(input),
  mostFrequent: mostFrequentLetter(decompress(input)),
  uniqueLetters: countUniqueLetters(decompress(input))
};

console.log(result);

