#! node
/* Afficher un escalier ayant comme nombre de marche, le nombre inscrit en argument */

let nb = process.argv[2];
let i = 0;

function escalier(nb) {

if (isNaN(process.argv[2])) {
  console.log("Veuillez indiquer au script, un nombre en argument. Ex : $> node Escalier.js 5");
}

else if (process.argv[3] !== undefined) {
  console.log("Veuillez indiquer au script, qu'un seul nombre en argument. Ex : $> node Escalier.js 5");
}

else {
  while (i <= nb) {
    console.log(" ".repeat(nb - i),"#".repeat(i));
    i++;
}
}
}

escalier(nb);
