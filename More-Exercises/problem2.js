function nameGame(arr) {
    arr.pop()
    let weapon = arr.shift().split(`|`);


    while (arr.length > 0) {
        let [command, secondCommand, ind] = arr.shift().split(` `)
        let index= Number(ind)

        if (command == `Move` && secondCommand == `Left`) {
            if (index >= 0 && index - 1 >= 0) {
                let first = weapon[index]
                weapon.splice(index, 1)
                weapon.splice(index - 1, 0, first)
            }
        }

        if (command == `Move` && secondCommand == `Right`) {
            if ( index < weapon.length && index + 1 < weapon.length ) {
                let second = weapon[index];
                weapon.splice(index, 1);
                weapon.splice(index + 1, 0, second)
            }
        }

        if (command == `Check` && secondCommand == `Even`) {
            let even = weapon.filter((num, i) => i % 2 === 0)
            console.log(even.join(` `));
        }
        if (command == `Check` && secondCommand == `Odd`) {
            let odd = weapon.filter((num, i) => i % 2 != 0)
            console.log(odd.join(` `));
        }
    }

    console.log(`You crafted ${weapon.join(``)}!`)
}
nameGame(["ha|Do|mm|om|er",
"Move Right 0",
"Move Left 3",
"Check Odd",
"Move Left 2",
"Move Left 10",
"Move Left 0",
"Done"])