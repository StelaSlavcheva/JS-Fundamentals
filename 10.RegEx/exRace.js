function race(input) {

    let markNumbers = /[^0-9]+/gm;
    let markLetters = /[^a-z]+/gim;
    let racers = new Map();
   
    let str = input.shift().split(",");
    for (let person of str) {
      person = person.trim();
      racers.set(person, 0);
    }
    for (let line of input) {
      let name = line.split(markLetters).join("");
      let numbers = line.split(markNumbers).join("");
      if (racers.has(name)) {
        let temp = racers.get(name);
        for (const num of numbers) {
          temp += Number(num);
        }
        racers.set(name, temp);
      }
    }
    let temp = [...racers.entries()].sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${temp[0][0]}`);
    console.log(`2nd place: ${temp[1][0]}`);
    console.log(`3rd place: ${temp[2][0]}`);
}  
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])