function inventory(arr){
    let heros = [];

    for (let el of arr){
        let [hero, level, item] = el.split(' / ');
        level = Number(level);
        item = item.split(`, `).sort((a, b) => a.localeCompare(b)).join(`, `)
        let obj = {
            hero,
            level,
            item,
        }
        heros.push(obj)
    }
    heros
    .sort((a,b) => a.level - b.level)
    .forEach(a => {
        console.log(`Hero: ${a.hero}`)
        console.log(`level => ${a.level}`)
        console.log(`items => ${a.item}`)
    })

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
     )