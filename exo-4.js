function calculerTopUtilisateur(users, seuil) {
  let utilisateursAvecSomme = [];

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let total = 0;

    for (let j = 0; j < user.s.length; j++) {
      if (user.s[j] >= seuil) {
        total += user.s[j];
      }
    }

    if (total > 0) {
      utilisateursAvecSomme.push({ nom: user.n, somme: total });
    }
  }

  utilisateursAvecSomme.sort(function(a, b) {
    return b.somme - a.somme;
  });

  let topUtilisateur = utilisateursAvecSomme[0] ? utilisateursAvecSomme[0].nom : null;

  console.log("Top:", topUtilisateur);
}

calculerTopUtilisateur([
  { n: "alice", s: [10, 20, 5, 40] },
  { n: "bob", s: [5, 5, 5, 5] },
  { n: "charlie", s: [50, 10, 30] },
], 10);
