function grades(arr) {
    let obj = {}

    for (let el of arr) {
        let [name, ...grades] = el.split(' ');
        if (obj[name]) {
            obj[name].push(...grades.map(Number))
        } else {
            obj[name] = grades.map(Number);
        }
    }

    let sorted = Object.entries(obj)
    sorted.sort((a, b) => ((a[1].reduce((acc, c) => acc + c, 0)) / a.length) - (b[1].reduce((acc, c) => acc + c, 0)) / b.length);


    for (let [name, ...grades] of sorted) {
        console.log(`${name} -> ${grades}`)
    }
}
grades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)