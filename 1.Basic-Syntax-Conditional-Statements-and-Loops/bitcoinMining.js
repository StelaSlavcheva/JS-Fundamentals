function solve(arr) {
    let moneyEarned = 0;
    let days = 1;
    let firstDay = 0;

    for (let i = 0; i < arr.length; i++) {
        let el = Number(arr[i]);

        if (days % 3 === 0) {
            moneyEarned += (el * 67.51 * 0.7)
            if (moneyEarned >= 11949.16 && moneyEarned < 11949.16 * 2) {
                firstDay = days

            }
        } else {
            moneyEarned += (el * 67.51)
            if (moneyEarned >= 11949.16 && moneyEarned < 11949.16 * 2) {
                firstDay = days
            }
        }
        days += 1

    }

    let bitcoins = Math.floor(moneyEarned / 11949.16);

    let money = (moneyEarned - (bitcoins * 11949.16)).toFixed(2)

    console.log(`Bought bitcoins:${bitcoins}\nDay of the first purchased bitcoin: ${days}\nLeft money: ${money} lv.`)

}
solve([100, 200, 300])
