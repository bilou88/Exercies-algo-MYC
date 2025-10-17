const input = "a3b2c4a12"

function decompress(input) {
    let décompressed = "";
    let i = 0; 

    while i < input.length {
        let lettre = input[i];
        i++;

        
        consologe.log(lettre)


/* for (let i = 0; i < input.length; i+= 2) 
{
  const char = input[i];
  const count = parseInt(input[i + 1], 10);
  décompressed += char.repeat(count);
}

console.log(décompressed)

let lettres = [];
for (const l of décompressed) {
  lettres[l] = (lettres[l] || 0) + 1;
}

console.error(lettres)



const resultat = ""
décompressed = décompressed
lettres = "lettres"  */