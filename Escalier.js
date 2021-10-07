#! node

let nb = process.argv[2];
let i = 0;

while (i <= nb) {
  console.log(" ".repeat(nb - i),"#".repeat(i));
  i++;
}
