function occurrences(input) {
    let word = input.shift();
    let text = input.shift();

        let old;
        while (old !== text) {
          old = text;
          text = text.replace(word, '');
        }
        console.log(text);
      }

occurrences([`ice`,`kicegiciceeb`])
