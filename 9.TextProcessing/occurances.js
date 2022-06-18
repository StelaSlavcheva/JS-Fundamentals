function occurances(input, str) {
    let count = 0;
    input = input.split(' ');

    for (let el of input) {
        if (el === str) {
            count++;
        }
    }
    console.log(count)

}
occurances("This is a word and it also is a sentence",
    "is")