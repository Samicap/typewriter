const sentence = "hello to the world";
for (let char of sentence) {
  let newSentence = "";
  setTimeout(() => {
    process.stdout.write(char) // similar to console.log but prints the characters on the same line rather than next line.
  }, 1000);

};

