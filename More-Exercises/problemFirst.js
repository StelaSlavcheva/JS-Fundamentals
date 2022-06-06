function first(arr) {
    let experience = Number(arr.shift());
    let battles = Number(arr[0]);
    let countOfBattles = 0;
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
        countOfBattles++;
        if (i % 3 === 0 && i != 0) {
            sum = sum + (arr[i] + arr[i] * 0.15)
        } else if (i % 5 === 0 && i != 0) {
            sum = sum + (arr[i] - arr[i] * 0.10)
        } else if (i % 15 === 0 && i != 0) {
            sum = sum + (arr[i] + arr[i] * 0.05)
        } else {
            sum += arr[i]
        }
        if (sum >= experience) {
            console.log(`Player successfully collected his needed experience for ${countOfBattles} battles.`)
            break;
        }
    }
    if (sum < experience) {
        console.log(`Player was not able to collect the needed experience, ${(experience - sum).toFixed(2)} more needed.`)
    }
}
first([500,
    5,
    50,
    100,
    200,
    100,
    20])
    