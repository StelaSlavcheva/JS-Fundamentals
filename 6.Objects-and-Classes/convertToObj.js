function convert(el){
    let obj = JSON.parse(el);

    for (key in obj){
        console.log(`${key}: ${obj[key]}`)
    }

}
convert('{"name": "George", "age": 40, "town": "Sofia"}')