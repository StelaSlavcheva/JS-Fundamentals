function towns(inputArr){
    for (let el of inputArr){

        let [city, lat, long] = el.split(' | ');

        let obj = {
            town:city,
            latitude: Number(lat).toFixed(2),
            longtitude: Number(long).toFixed(2),
        }
        console.log(obj)
    }


}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])