function employees(arr){

    for (let name of arr){
        let obj = {
            name:name,
            num: name.length,
        } 
        console.log( `Name: ${obj.name} -- Personal Number: ${obj.num} `);
    }   

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]    );