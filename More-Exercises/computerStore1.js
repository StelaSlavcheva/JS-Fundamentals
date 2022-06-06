function computerStore(arr) {

    let typeOfCustomer = arr.pop().toString()

    let price = 0;
    
    let totalPrice = 0;

    for (let i = 0; i < arr.length; i++) {
        let num=Number(arr[i])
        if (num < 0) {
            console.log(`Invalid price!`)
         
        } else
            price += num
    }

    if (price === 0) {
        console.log(`Invalid order!`);
    

    } else {
        let taxes = price * 0.2;
        if (typeOfCustomer === `special`) {
            totalPrice = (price+taxes) * 0.9;
        }
        else if (typeOfCustomer === `regular`) {
            totalPrice = price + taxes
        }

        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${price.toFixed(2)}$`) 
        console.log(`Taxes: ${taxes.toFixed(2)}$`) 
        console.log(`-----------`)
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)

    }

}
computerStore(['regular'])