function manWar(arr) {
 
    let pirateShip = arr.shift().split('>').map(Number)
    let warShip = arr.shift().split('>').map(Number)
    let health = Number(arr.shift())
    let forRepair = health * 0.2
    arr.pop()
    let willPrint = true
 
    for (let line of arr) {
        let [command, startIndex, endIndex, damage] = line.split(' ')
        startIndex = Number(startIndex)
        endIndex = Number(endIndex)
        damage = Number(damage)
 
        if (command == "Fire" && warShip[startIndex] != undefined) {
            warShip[startIndex] -= endIndex
            if (warShip[startIndex] <= 0) {
                console.log(`You won! The enemy ship has sunken.`);
                willPrint = false
                break;
            }
        } else if (command == "Defend" && startIndex >= 0 && startIndex < pirateShip.length && endIndex >= startIndex && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage
                if (pirateShip[i] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    willPrint = false
                    break;
                }
            }
        } else if (command == "Repair" && startIndex >= 0 && startIndex < pirateShip.length) {
            pirateShip[startIndex] += endIndex
            if (pirateShip[startIndex] > health) {
                pirateShip[startIndex] = health
            }
        } else if (command == "Status") {
            let count = 0
            for (let section of pirateShip) {
                if (section < forRepair) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
 
    if (willPrint) {
        console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}`);
        console.log(`Warship status: ${warShip.reduce((a, b) => a + b)}`);
 
    }
}


    // manWar(['12>13>11>20>66',
    //     '12>22>33>44>55>32>18',
    //     '70',
    //     'Fire 2 11',
    //     'Fire 8 100',
    //     'Defend 3 6 11',
    //     'Defend 0 3 5',
    //     'Repair 1 33',
    //     'Status', 'Retire']);

    manWar([`2>3>4>5>2`,'6>7>8>9>10>11','20', 'Status', 'Fire 2 3', 'Defend 0 4 11', 'Repair 3 18', 'Retire'])