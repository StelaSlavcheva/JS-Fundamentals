function meetings(arr) {
    let obj = {};

    for (let el of arr) {
        let [day, person] = el.split(' ');
        if (!obj[day]) {
            obj[day] = person;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }
       for (key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)