const sentence = "hello to the world";
let delay = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char) // similar to console.log but prints the characters on the same line rather than next line.
  }, delay);
delay += 100;

};

setTimeout(() => {
  process.stdout.write("\n")
}, delay);

