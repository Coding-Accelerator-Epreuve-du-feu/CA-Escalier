#! node
/* Afficher un escalier ayant comme nombre de marche, le nombre inscrit en argument */

if (isNaN(process.argv[2])) {
  console.log("Veuillez indiquer un nombre en tant qu'argument au script. Ex : $> Escalier.js 5");
}

let nb = process.argv[2];
let i = 0;

while (i <= nb) {
  console.log(" ".repeat(nb - i),"#".repeat(i));
  i++;
}
