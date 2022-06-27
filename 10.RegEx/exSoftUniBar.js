function barIncome(input) {
    input.pop
    let total = 0;

    input.forEach((el) => {
        let pattern = /%(?<customer>[A-Z]{1}[a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+[\.|\d]\d*)\$/g
        let match = pattern.exec(el);
        let customer = match.groups[`customer`];
        let product = match.groups[`product`];
        let count = Number(match.groups[`count`]);
        let price = Number(match.groups[`price`]);

        totalPrice = count * price;
        total += totalPrice;

        console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`)   ;
    }
        console.log(`Total income: ${total.toFixed(2)}`);
    }

barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])