function solve(arr) {
    let storage = new Map();

    for (let el of arr) {
      let [product, quanity]  = el.split(` `)
       
        if (!storage.has(product)) {
            storage.set(product, quanity)
        } else {
            let currQuantity = storage.get(product);
            let newQuantity = currQuantity + quanity;
            storage.set(product, newQuantity);
        }
    }
    for (let [key, value] of storage) {
        console.log(`${key} -> ${value}`)
    }
}

solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])
