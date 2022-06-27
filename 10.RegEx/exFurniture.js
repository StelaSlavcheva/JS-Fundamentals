// function furniture(input) {

//     let pattern = /\>>(?<product>[A-Za-z]+)<<(?<price>[[+-]?([0-9]*[.])?[0-9]+)\!(?<quantity>\d)/g;
//     let match = pattern.exec(input);
//     let arrFurniture = []
//     let totalMoney = 0
//     let i = 0

//     while (input[i] !== 'Purchase') {

//         while (match !== null) {
//             let product = match.groups[`product`];
//             let price = match.groups[`price`];
//             let quantity = Number(match.groups[`quantity`]);
//             totalMoney += (price * quantity);
//             arrFurniture.push(product)
//             match = pattern.exec(input)
//         }
//         i++
//     }

//     console.log(`Bought furniture:\n${arrFurniture.join(`\n`)}`)
//     console.log(`Total money spend: ${totalMoney}`)
// }


// furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])

function furniture(arr) {
    let pattern =  />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+[\.|\d]\d*)!(?<count>\d+)/
    let sum = 0
    let arrBoughtFurniture = []

    let findIndex = arr.indexOf('Purchase')
    arr = arr.splice(0, findIndex).filter(el => pattern.test(el))

    for (const el of arr) {
      let result = String(el).match(pattern)
      let items = result.groups.name
      let price = result.groups.price
      let count = result.groups.count

      arrBoughtFurniture.push(items)
      sum += price * count
    }

    console.log('Bought furniture:');
    arrBoughtFurniture.forEach(el => console.log(String(el)));
    console.log(`Total money spend: ${ sum.toFixed(2) }`);
  }

  furniture(['>>TV<<300!5', '>>Sofa<<312.23!3', '>Invalid<<!5', 'Purchase', ])
  furniture([ '>>TV<<300!5', '>Invalid<<!5', 'Purchase', ])