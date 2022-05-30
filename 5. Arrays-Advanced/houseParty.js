function houseParty(party) {

    let result = [];
    for (let line of party) {
        let [name, is, not, going] = line.split(' ')

        if (not !== 'not' && !result.includes(name)) {
            result.push(name);
        } else if (not !== 'not' && result.includes(name)) {
            console.log(`${name} is already in the list!`);
        } else if (not === 'not' && result.includes(name)) {
            result.splice(result.indexOf(name), 1);
        } else if (not === 'not' && !result.includes(name)) {
            console.log(`${name} is not in the list!`);
        }
    }
    console.log(result.join('\n'));
}
houseParty(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!'] )

