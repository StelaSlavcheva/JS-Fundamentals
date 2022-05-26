function solve(n, type, day) {
    let price = 0

    if (type === `Students`) {
        if (day === `Friday`) {
            price = n * 8.45;
        } else if (day === `Saturday`) {
            price = n * 9.8;
        } else if (day === `Sunday`) {
            price = n * 10.46;
        }
        if (n >= 30) {
            price *= 0.85
        }

    } else if (type === `Business`) {
        if (day === `Friday`) {
            price = n * 10.9;
        } else if (day === `Saturday`) {
            price = n * 15.6;
        } else if (day === `Sunday`) {
            price = n * 16;
        }
        if (n >= 100) {
            price = (price / n) * (n - 10);
        }

    } else if (type === `Regular`) {
        if (day === `Friday`) {
            price = n * 15;
        } else if (day === `Saturday`) {
            price = n * 20;
        } else if (day === `Sunday`) {
            price = n * 22.5;
        }
        if(n>=10 && n<=20){
            price *=0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(30, "Students", "Sunday")
