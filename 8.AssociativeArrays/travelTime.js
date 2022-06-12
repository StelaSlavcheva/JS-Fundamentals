function travelTime(input) {
    let obj = {};

    for (let el of input) {
        let [country, town, price] = el.split(' > ');
        price = Number(price);

        if (!obj[country]) {
            obj[country] = { [town]: [price] }
        } else {
            if (!obj[country][town]) {
                obj[country][town] = [price];
            } else {
                obj[country][town].push(price);
            }
        }
    }

  

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)