function p(d, t) {
  let somme = 0;
  let count = 0;
  let categories = {};

  for (let i = 0; i < d.length; i++) {
    let item = d[i];

    if (item.p > t) {
      somme += item.p;
      count++;

      if (!categories[item.c]) {
        categories[item.c] = 1;
      } else {
        categories[item.c]++;
      }
    }
  }

  if (count === 0) {
    console.log("Pas de produit au-dessus du seuil.");
    return;
  }

  let moyenne = somme / count;

  let categorieMax = null;
  let maxCount = 0;
  for (let key in categories) {
    if (categories[key] > maxCount) {
      maxCount = categories[key];
      categorieMax = key;
    }
  }

  console.log("moyenne:", moyenne, "top:", categorieMax);
}

p([
  { p: 50, c: "tech" },
  { p: 120, c: "clothes" },
  { p: 300, c: "tech" },
  { p: 90, c: "home" },
  { p: 500, c: "tech" },
], 100);
