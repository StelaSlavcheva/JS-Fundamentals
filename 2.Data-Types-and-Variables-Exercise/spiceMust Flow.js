function spiceMustFlow(yield) {

    let storage = 0;
    let daysCount = 0

    while (yield >= 100) {
        storage += yield - 26;
        yield -= 10;
        daysCount ++;
    }
    if(storage - 26 >= 26){
        storage -= 26;
    }
    return (`${daysCount}\n${storage}`)

}
console.log(spiceMustFlow(111))