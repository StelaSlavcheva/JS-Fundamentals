function heartDelivery(array) {
    let myPositions = array.shift().split('@').map(Number);
    let cupidIndex = 0;
    let unfailedPlaces = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let command = element.split(' ') [0];
        let index = Number(element.split(' ') [1]);
        if (command === 'Jump') {
            cupidIndex += index
            if (cupidIndex > myPositions.length - 1) {
                cupidIndex = 0;
            }
            if (myPositions[cupidIndex] === 0) {
                console.log(`Place ${cupidIndex} already had Valentine's day.`)
            } else {
                myPositions[cupidIndex] -= 2;
                if (myPositions[cupidIndex] === 0) {
                    console.log(`Place ${cupidIndex} has Valentine's day.`)
                    unfailedPlaces ++
                }
            }
        } else {
            console.log(`Cupid's last position was ${cupidIndex}.`)
            let failedPlaces = myPositions.length - unfailedPlaces
            if (failedPlaces === 0) {
                console.log("Mission was successful.")
            } else {
                console.log(`Cupid has failed ${failedPlaces} places.`)
            }
        }
    }
}
heartDelivery([`10@10@10@2`,`Jump 1`,`Jump 2`,`Love!`]    )