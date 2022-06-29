function solve(input) {
    let str = input.shift().split(``)
    let arrOfChars = []
    for (let i = 0; i < str.length; i++) {
        if (!arrOfChars.includes(str[i])) {
            arrOfChars.push(str[i])
        }
    }

    for (let char of arrOfChars) {
        let index = []
                for (let j = 0; j < str.length; j++) {
            if (char === str[j]) {
                index.push([j])
            }
        }
        console.log(`${char}:${index.join(`/`)}`)
    }

}
solve([`abababa`])