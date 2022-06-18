function censored(text, word){

    let newWord = '*'.repeat(word.length);
    let censored = text.replace(word, newWord);
    while (censored.includes(word)){
           censored = censored.replace(word, newWord); 
    }
    console.log(censored)


}
censored("A small sentence with small words", "small")