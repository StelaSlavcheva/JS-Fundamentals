function partyTime(input) {
    let obj = {
        'vip': [],
        'regular': [],
    }

    let partyIndex = input.indexOf('PARTY');
    let list = input.splice(0, partyIndex);
    arrivedGuests = input.splice(1);

    for (let guest of list) {
        let char = guest[0]
        if (isNaN(char)) {
            obj['regular'].push(guest)
        } else {
            obj['vip'].push(guest)
        }
    }

    for (let el of arrivedGuests) {
        if (obj['vip'].includes(el)) {
            let i = obj['vip'].indexOf(el);
            obj['vip'].splice(i, 1)
        } if (obj['regular'].includes(el)) {
            let i = obj['regular'].indexOf(el);
            obj['regular'].splice(i, 1)
        }
    }

    console.log(obj['vip'].length + obj['regular'].length)
    console.log(obj['vip'].join(`\n`));
    console.log(obj['regular'].join(`\n`))



}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])