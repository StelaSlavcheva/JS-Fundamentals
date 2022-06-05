function phoneBook(arr) {
    let obj = {}
    for (let el of arr) {
        let [name, num] = el.split(' ');
        obj[name] = num
    }

    for (let key in obj){
        console.log(`${key} -> ${obj[key]}`)
    }

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)