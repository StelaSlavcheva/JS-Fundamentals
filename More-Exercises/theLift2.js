function lift(arr) {
    let people = Number(arr[0]);
    let liftArr = arr.pop().split(` `).map(Number);
    let wagons = [];
    let emptySeats = 0;

    for (let i = 0; i < liftArr.length; i++) {
        let seats = 4 - liftArr[i]
        let boarding = 0;

        if (people >= seats) {
            boarding = seats;
            people -= boarding;
        } else {
            boarding = people;
            people -= boarding;
        }
        emptySeats = seats - boarding
        wagons.push(liftArr[i] + boarding)
    }

    if (people <= 0 && emptySeats > 0) {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(` `))
    }
    if (people > 0 && emptySeats <= 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(` `))
    }
    if (people === 0 && emptySeats === 0) {
        console.log(wagons.join(` `))
    }

}
lift([ "20", "0 2 0"])