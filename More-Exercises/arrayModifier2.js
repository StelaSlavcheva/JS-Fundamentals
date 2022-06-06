function arrayModifier(arr) {
    arr.pop()
    let modifiedArr = arr.shift().split(` `).map(Number)

    while (arr.length > 0) {
        let [command, firstIndex, secondIndex] = arr.shift().split(` `)

        if (command === `swap`) {
            firstEl = modifiedArr[firstIndex];
            secondEl = modifiedArr[secondIndex];
           modifiedArr.splice(Number(firstIndex), 1, secondEl)
           modifiedArr.splice(Number(secondIndex), 1, firstEl)
        }
        if (command === `multiply`){
            let multiply = modifiedArr[Number(firstIndex)] * modifiedArr[Number(secondIndex)]
            modifiedArr.splice(Number(firstIndex),1,multiply)
        }
        if (command === `decrease`){
            for (let i = 0; i < modifiedArr.length; i++) {
                modifiedArr.splice(i,1, modifiedArr[i]-1)
             }
        }
    }
console.log(modifiedArr.join(`, `))
}
arrayModifier([`23 -2 321 87 42 90 -123`,
    `swap 1 3`, `swap 3 6`, `swap 1 0`, `multiply 1 2`,
    `multiply 2 1`, `decrease`, `end`]);