function modernTimes(str) {
    let arr = str.split(` `)

    for (let word of arr) {

        if (word.includes(`#`) && word.length > 1) {

            let isOnlyLetters = true;
            word = word.slice(1);
            for (const char of word) {
                let code = char.charCodeAt();

                if (code < 65 || code > 90 && code < 97 || code > 122) {
                    isOnlyLetters = false;
                    break
                }
            }
            if (isOnlyLetters) {
                console.log(word)
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
