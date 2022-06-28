function asciiSumator(input) {
    input = input.toString().split(`,`)

    let firstEl = input[0].charCodeAt();
    let secondEl = input[1].charCodeAt();

    let str = input[2].toString()
    let sum = 0

    if (secondEl < firstEl) {
        for (let i = 0; i < str.length; i++) {
            let code = str[i].charCodeAt()
            if (code < firstEl && code > secondEl) {
                sum += code
            }
        }

    } else {
        for (let i = 0; i < str.length; i++) {
            let code = str[i].charCodeAt()
            if (code > firstEl && code < secondEl) {
                sum += code
            }
        }
    }
    console.log(`${sum}`)
}
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$'])