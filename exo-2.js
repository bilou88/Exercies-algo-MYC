function melangerTab(tab) {
  for (let i = tab.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp;
  }
  return tab;
}

function creerPaires(tabJoueurs) {
  const tab = [...tabJoueurs];
  melangerTab(tab);

  const paires = [];

  while (tab.length >= 2) {
    const joueur1 = tab.pop();
    const joueur2 = tab.pop();
    paires.push([joueur1, joueur2]);
  }


  if (tab.length === 1) {
    paires.push({ exempt: tab[0] });
  }

  return paires;
}


const joueurs1 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const joueurs2 = ["Alice", "Bob", "Charlie", "David", "Eve"];


console.log("╔══════════════════════════╗");
console.log("║ Paires de joueurs1       ║");
console.log("╚══════════════════════════╝");
console.log(creerPaires(joueurs1));

console.log("\n\n");

console.log("╔══════════════════════════╗");
console.log("║ Paires de joueurs2       ║");
console.log("╚══════════════════════════╝");
console.log(creerPaires(joueurs2));
