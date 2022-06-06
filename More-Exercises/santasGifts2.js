function santaGifts(arr) {
    let numberOfCommands = arr.shift()
    let housesArr = arr.shift().split(` `).map(Number)
    let position = 0;

    while ( arr.length > 0 ) {
        let [command, first, second] = arr.shift().split(` `);

        first = Number(first);
        second = Number(second);

        if (command == `Forward`) {
            housesArr.splice(position + first, 1)
            position += first;
        }
        if (command == `Back`) {
            housesArr.splice(position - first, 1)
            position -= first;
        }
        if (command == `Gift`) {
            housesArr.splice(first, 0, second)
            position = first;
        }
        if (command == `Swap`) {
            firstIndex = housesArr.indexOf(first);
            secondIndex = housesArr.indexOf(second);
            housesArr.splice(firstIndex, 1, second)
            housesArr.splice(secondIndex, 1, first)
        }
    }
    console.log(`Position: ${position}`)
    console.log(housesArr.join(`, `))
}
santaGifts
([`6`,`50 40 25 63 78 54 66 77 24 87`,`Forward 4`,`Back 3`,`Forward 3`,`Gift 2 88`,`Swap 50 87`,`Forward 1`])