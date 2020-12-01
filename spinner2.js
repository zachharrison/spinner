let time = 300;
const spins = [
  '\r|   ', 
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r/   ',
  '\r|   '
];

for(let i = 0; i < spins.length; i++){
  time += 200;
  setTimeout(() => {
    process.stdout.write(spins[i]);
  }, time);
}
