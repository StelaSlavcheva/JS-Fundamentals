function train(arr) {
    let wagons = arr
        .shift()
        .split(` `)
        .map(Number);

    let maxCapacity = arr[0];
    arr.shift();
    for (let line = 0; line < arr.length; line++) {
        let [firstArg, secondArg] = arr[line].split(` `);

        if (firstArg === `Add`) {
            wagons.push(Number(secondArg));
        } else {
            let passengers = Number(firstArg);
            for (let i = 0; i < wagons.length; i++) {

             if (wagons[i] + passengers <= maxCapacity) {
                wagons[i] += passengers;
                break;
            }
        }
    }
}  console.log(wagons.join(` `));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10','Add 0', '30', '10',    '75']);

