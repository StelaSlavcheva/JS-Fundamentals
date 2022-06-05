function solve(input) {

    let obj = {};

    let streets = input.shift().split(`, `);

    for (let streetName of streets) {
        obj[streetName] = [];
    }

    for (let el of input) {
        let [street, person] = el.split(` - `)
        if (obj.hasOwnProperty(street)) {
            obj[street].push(person)
        }
    }
    let entries = Object.entries(obj)
        .sort((a, b) => b[1].length - a[1].length);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value.length}`)
        value.forEach(x => console.log(`--${x}`))
    }

}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])
