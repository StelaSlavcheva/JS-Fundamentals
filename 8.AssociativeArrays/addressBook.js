function addressBook(arr){

    let obj ={};

    for (let el of arr){
        let [name, address] = el.split(':');
        obj[name] = address;
    }

    let sorted = Object.entries(obj);
    sorted.sort((a,b) => a[0].localeCompare(b[0]))

    for( let [name, address] of sorted){
        console.log(`${name} -> ${address}`)
    }

}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)