function passWord(input) {
    let str = input[0] + input[1]
    let passWord = str.toLowerCase().split(``)
    let word = input[2].toUpperCase()
    let vowels = [`a`, `e`, `i`, `o`, `u`]

    for (let char of passWord) {
        for (let i = 0; i < vowels.length; i++) {
            if (char === vowels[i]) {
                let counter = 0
                if (counter <= word.length){
                    char = word.substring(counter,counter+1)
                } else if( counter> word.length){
                    counter = 0
                }        
                }
            }

        }
console.log(passWord.join(``))
    }
    

passWord(['ilovepizza', 'ihatevegetables', 'orange'])