function store( stockArr, orderArr){
    let obj = {};
    for (let i=0; i<stockArr.length; i+=2){
      obj[stockArr[i]] = Number(stockArr[i+1])

    }

    for ( let j=0; j<orderArr.length; j+=2){

        if (obj.hasOwnProperty(orderArr[j])){
            obj[orderArr[j]]+= Number(orderArr[j+1])
        }else{
            obj[orderArr[j]]= Number(orderArr[j+1])
        }
        
    }
    
    for (const product in obj){
        console.log(`${product} -> ${obj[product]}`)
    }
           
   


}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )